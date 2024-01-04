import {personalDataService} from "../services/personalData.service.js";
export default class PersonalDataController {
    async getPersonalData(ctx) {
        try {
            const response = await personalDataService.getPersonalData(ctx.request.body.id);
            ctx.response.status = 200;
            ctx.body = {
              data: response,
            };
        } catch (e) {
            console.log(e);
            ctx.response.status = 404;
            ctx.body = {
                data: "No Personal Data Information.",
            }
        }
    }
    async getPersonalSkills(ctx) {
        try {
            const response = await personalDataService.getPersonalSkills(ctx.request.body.id);
            ctx.response.status = 200;
            ctx.body = {
              data: response,
            };
        } catch (e) {
            console.log(JSON.stringify(e));
            ctx.response.status = 404;
            ctx.body = {
                data: "No Personal Skills Information.",
            }
        }
    }
    async updatePersonalDataSkills(ctx) {
        try {
            const id = ctx.request.body.id;
            const data = ctx.request.body
            console.log("controller",data)
            const response = await personalDataService.updateDataSkills(id,data);
            ctx.response.status = 200;
            ctx.body = {
              data: response,
            };
        } catch (e) {
            console.log(e);
            ctx.response.status = 404;
            ctx.body = {
                data: "Data for id: " + ctx.request.body.id + " does not exists",
            };
        }
    }
}