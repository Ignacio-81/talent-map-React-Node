import Koa from "koa";
import { koaBody } from "koa-body";
import bodyParser from "koa-bodyparser";
import router from "./router/index.js"
import yargs from "yargs";
import invalidUrl from "./middleware/invalidUrl.mdw.js";
import MongoClient from "./classes/MongoClient.class.js";
import config from "./config/config.js";
import insertPersonalDataMongo from "./config/create-dataMongo.js"

/* const mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}; */

const app = new Koa();
const db = new MongoClient();

//Define confirguration for console paramteters:
export const args = yargs(process.argv.slice(2))
    .alias({
        p: "port",
    })
    .default({
        port: config.port,
    }).argv;

/* app.use(
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
); */
app.use(bodyParser());
app.use(bodyParser({ urlencoded: { extended: true } }));
app.use(koaBody());
app.use(async (ctx, next) => {
    console.log("Request body:", ctx.request.rawBody);
    await next();
});
app.use(router.routes());
app.use(invalidUrl);

try {
    await db.connect();
    await insertPersonalDataMongo();
    await db.disconnect();
} catch (err) {
    console.error(err)
}

app.listen(args.port, () =>
    console.log(
        "Server listening on port :" + args.port)
);
app.on("error", (err) => {
    console.log(err);
});



