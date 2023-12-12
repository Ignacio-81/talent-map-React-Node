import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { Server as IOServer } from "socket.io";
import { engine } from "express-handlebars"
import Container from "../db/DB-container.js";
import configMySql from './db/config/config_mysql.js'
import configSqlite from './db/config/config_sqlite.js'
import insertProds from "./data/create-prods.js"
import createProdTable from "./data/table/create-prod-table-mysql.js"
import createChatTable from "./data/table/create-chat-table-sqlite.js"
import router from "./routes/index.js"
import { mongoConnect } from '../db/config/mongoConfig.js';
import passport from "passport";
import { passportStrategies } from "./lib/passport.lib.js";
import { User } from "../db/config/user.model.js"
import { configObject } from "../db/config/index.js";

const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let dbProducts = new Container("products", configMySql)
let dbChats = new Container("chats", configSqlite)

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(
    session({
        secret: "coderhouse",
        resave: false,
        rolling: true,
        saveUninitialized: false,
        store: new MongoStore({
            mongoUrl: configObject.mongoUrl,
            mongoOptions,
        }),
        cookie: {
            expires: 60000 //session will expire without activity
        }
    })
);

app.engine(
    "hbs",
    engine({
        extname: ".hbs",
        defaultLayout: "main.hbs",
    })
)
app.set("view engine", ".hbs");

app.use("/static", express.static(__dirname + "/public"));

//Passport configuration:
app.use(passport.initialize());
app.use(passport.session());
passport.use("login", passportStrategies.loginStrategy);
passport.use("register", passportStrategies.registerStrategy);
passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((data) => {
        done(null, data);
    })
        .catch((err) => { console.error(err); })
});

app.use("/", router);

try {
    //Create new chat table on SQlite DB
    await createChatTable("chats")
    //Create the new table on the database
    await createProdTable("products")

    //Insert Base products into the database
    await insertProds()
    await mongoConnect();
} catch (err) {
    console.error(err)
}

const expressServer = app.listen(3000, () => console.log('listening on port 3000'));
app.on("error", (err) => {
    console.log(err)
})
const io = new IOServer(expressServer);

io.on("connection", async (socket) => {
    console.log(`New client connection ${socket.id}`);

    // send product for new client
    socket.emit("server:products", await dbProducts.getAll());

    // listen products from clients
    socket.on("client:productData", async (productData) => {
        // update product DB
        productData.price = parseInt(productData.price)
        await dbProducts.save(productData)

        // send product to all clients
        io.emit("server:products", await dbProducts.getAll());
    });
    //send chat message for new user
    socket.emit("server:message", await dbChats.getAll());

    // listen new message from chat
    socket.on("client:message", async (messageInfo) => {
        // update message array
        await dbChats.save(messageInfo)
        // send message to all users
        io.emit("server:message", await dbChats.getAll());
    });
});

