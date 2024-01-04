import Router from "koa-router";
import PersonalDataController from "../controller/personalData.controller.js"
const personalData = new PersonalDataController()

const router = new Router({
    prefix: "/personal",
  });
  
  router.post("/data", personalData.getPersonalData);
  router.post("/skills", personalData.getPersonalSkills);
  router.put("/", personalData.updatePersonalDataSkills);
export default router