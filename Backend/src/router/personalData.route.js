import Router from "koa-router";
import { PersonalDataController } from "../controller/personalData.controller.js"
const personalData = new PersonalDataController()

const router = new Router({
    prefix: "/personal",
  });
  
  router.get("/data/:id?", personalData.getPersonalData);
  router.get("/skills/:id?", personalData.getPersonalSkills);
  router.put("/:id?", personalData.updatePersonalDataSkills);
export default router