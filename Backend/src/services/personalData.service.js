import MongoDao from "../dao/mongo.Dao.js";
import {personalData } from "../model/personalData.model.js"
import { skills } from "../model/skillsData.model.js"

const personalDataApi = new MongoDao(personalData);
const skillsApi = new MongoDao(skills);

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
          let data = await skillsApi.findById(id);
          if (data) {
            return data;
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

  async function saveDataSkills(data) {
    try {
        console.log("save data", data );
      if (id) {
        if (!await personalDataApi.findById(id) ) {
          throw {
            message: "No personal data for this id was found",
            status: 400,
          };
        }
        if (!await skillsApi.findById(id) ) {
            throw {
              message: "No skills for this id was found",
              status: 400,
            };
          }
        let newPData = await personalDataApi.save(data.personalData);
        let newSData = await skillsApi.save(data.skills);
        console.log(newPData,newSData );
        
        return {newPData,newSData};
      } else {
        throw new Error("Please send a valid id");
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  async function updateDataSkills(id, data) {
    try {
        console.log("update data", id, data );
      if (id) {
        if (!await personalDataApi.findById(id) ) {
          throw {
            message: "No personal data for this id was found",
            status: 400,
          };
        }
        if (!await skillsApi.findById(id) ) {
            throw {
              message: "No skills for this id was found",
              status: 400,
            };
          }
        let newPData = await personalDataApi.update(id, data.personalData);
        let newSData = await skillsApi.update(id, data.skills);
        console.log(newPData,newSData );
        
        return {newPData,newSData};
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
    saveDataSkills,
    updateDataSkills
  }