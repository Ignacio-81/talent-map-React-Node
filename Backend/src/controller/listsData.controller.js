import {listsDataService} from "../services/index.js";
export default class ListsDataController {
    async getLists(ctx) {
        try {
            const response = await listsDataService.getListsData();
            ctx.response.status = 200;
            ctx.body = {
              data: response,
            };
        } catch (e) {
            console.log(e);
            ctx.response.status = 404;
            ctx.body = {
                data: "No List Data Information.",
            }
        }
    }
}