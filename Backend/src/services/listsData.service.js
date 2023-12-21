import MongoDao from "../dao/mongo.Dao.js";
import { lists } from "../model/lists.model.js"

const listsApi = new MongoDao(lists);

async function getListsData() {
    try {
        const data = await listsApi.findAll();
          if (data) {
            return data;
          } else {
            console.log("No data with Id: " + id);
            throw {
                message: "No data for that id",
                status: 400,
              };
          }
      } catch (err) {
        throw new Error(err);
      }
  }
  
  export const listsDataService = {
    getListsData
  }