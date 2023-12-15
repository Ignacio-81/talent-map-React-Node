import {personalDataService} from "../services/personalData.service.js";
export class PersonalDataController {
    async getPersonalData(ctx) {
        try {
            const response = await personalDataService.getPersonalData(ctx.params.id);
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
            const response = await personalDataService.getPersonalSkills(ctx.params.id);
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
            const id = ctx.params.id;
            const data = ctx.body.data
            console.log("controller",data)
            const response = await personalDataService.saveDataSkills(id,data);
            ctx.response.status = 200;
            ctx.body = {
              data: response,
            };
        } catch (e) {
            console.log(e);
            ctx.response.status = 404;
            ctx.body = {
                data: "Data for id: " + ctx.params.id + " does not exists",
            };
        }
    }
}