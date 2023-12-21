import Router from "koa-router";
import { ListsDataController } from "../controller/index.js"
const listsData = new ListsDataController()

const router = new Router({
    prefix: "/listas",
  });
  
  router.get("/", listsData.getLists);
export default router