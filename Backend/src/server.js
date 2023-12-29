import Koa from "koa";
import { koaBody } from "koa-body";
import cors from '@koa/cors'
//import bodyParser from "koa-bodyparser";
import router from "./router/index.js"
import yargs from "yargs";
import invalidUrl from "./middleware/invalidUrl.mdw.js";
import MongoClient from "./classes/MongoClient.class.js";
import config from "./config/config.js";
import insertPersonalDataMongo from "./config/create-dataMongo.js"

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

app.use(cors());
app.use(koaBody());
app.use(async (ctx, next) => {
    try {
        console.log("Request body:1", ctx.request.body);
        await next();
    }  catch (err) {
        console.log("Error")
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
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
    console.log("Listen Error: ",err);
});



