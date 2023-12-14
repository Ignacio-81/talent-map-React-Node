import {personalDataService} from "../services/personalData.service.js";
export class PersonalDataController {
    async getPersonalData(ctx) {
        try {
            //const response = await personalDataService.getPersonalData(ctx.params.id);
            const response = "Aca anduvo"
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

        } catch (e) {
            console.log(e);
            ctx.response.status = 404;
            ctx.body = {
                data: "No Personal Skills Information.",
            }
        }
    }
    async updatePersonalDataSkills(ctx) {
        try {

        } catch (e) {
            console.log(e);
            ctx.response.status = 404;
            ctx.body = {
                data: "Data for id: " + ctx.params.id + " does not exists",
            };
        }
    }
}