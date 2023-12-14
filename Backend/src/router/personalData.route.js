import Router from "koa-router";
import { PersonalDataController } from "../controller/personalData.controller.js"
const personalData = new PersonalDataController()

const router = new Router({
    prefix: "/personal",
  });
  
  router.get("/data", personalData.getPersonalData);
  router.get("/skills", personalData.getPersonalSkills);
  router.put("/:id?", personalData.updatePersonalDataSkills);
export default router