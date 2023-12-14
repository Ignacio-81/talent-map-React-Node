import MongoDao from "../dao/mongo.Dao.js";
import {personalData } from "../model/personalData.model.js"

const personalDataApi = new MongoDao(personalData);
async function getPersonalData(id) {
    try {
        if (id) {
          let data = await  personalDataApi.findById(id);
          if (data) {
            return data;
          } else {
            console.log("No data with Id: " + id);
            throw {
                message: "No data for that id",
                status: 400,
              };
          }
        } else if (id === undefined || id === null) {
          throw new Error("Id can't be empty");
        }
      } catch (err) {
        throw new Error(err);
      }
  }
  
async function getPersonalSkills(id) {
    try {
        if (id) {
          let skills = await skillsApi.findById(id);
          if (skills) {
            return skills;
          } else {
            throw {
                message: "No data for that id",
                status: 400,
              };
          }
        } else if (id === undefined || id === null) {
          throw new Error("Id can't be empty");
        }
      } catch (err) {
        throw new Error(err);
      }
  }

  async function saveDataSkills(id, data) {
    try {
      if (id) {
        const dataExists = await dataApi.findById(id);
        if (!dataExists ) {
          throw {
            message: "No data for this id was found",
            status: 400,
          };
        }
        let data = await dataApi.save(id, prod);
        data = { _id: id, ...data };
        console.log(data);
        return data;
      } else {
        throw new Error("Please send a valid id");
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  export const personalDataService = {
    getPersonalData,
    getPersonalSkills,
    saveDataSkills
  }