import MongoClient from "../classes/MongoClient.class.js";
import CustomError from "../classes/CustomError.class.js";
import config from "../config/config.js"

const searchId = config.searchIdForMongo //Configure this param in order to set for which param to search on Mongo collection.
export default class MongoDao {
  constructor(collection) {
    this.db = new MongoClient();
    this.collection = collection;
  }

  async findById(id) {
    try {
      /* await this.db.connect(); */
      const data = await this.collection.find({ [searchId] : id });
      return data[0];
    } catch (err) {
      const error = new CustomError(
        500,
        "Error getting data from the database"
      );
    } finally {
      /* await this.db.disconnect(); */
    }
  }
  async findAll() {
    try {
      /* await this.db.connect(); */
      const data = await this.collection.find({});
      return data;
    } catch (err) {
      const error = new CustomError(
        500,
        "Error getting data from the database"
      );
    } finally {
      /* await this.db.disconnect(); */
    }
  }

  async save(data) {
    try {
      /* await this.db.connect(); */
      const res = await this.collection(data).save();
      console.log("New Product Inserted");
      return res._id;
    } catch (err) {
      const error = new CustomError(500, "Error while writing DataBase:");
    } finally {
      /* await this.db.disconnect(); */
    }
  }

  async update(id, data) {
    try {
      /* await this.db.connect(); */
      const response = await this.collection.updateOne({ [searchId] : id }, data);
      if (response.modifiedCount) {
        console.log("respuesta",response);
        return data;
      } else {
        if (response.matchedCount === 1 && response.modifiedCount === 0) 
            console.log("No information modified for this object",data);
        else    
            throw new Error(`A problem while updating object:`,response);
      }
    } catch (err) {
      const error = new CustomError(500, "Error while updating DataBase");
      console.log(error,err.message);
    } finally {
      /* await this.db.disconnect(); */
    }
  }

  async deleteById(id) {
    try {
      await this.db.connect();
      const response = await this.collection.deleteOne({[searchId] : id });
      if (response.deletedCount) {
      } else {
        throw new Error(`A problem while deleting object: ${response}`);
      }
      return res._id;
    } catch (err) {
      const error = new CustomError(500, "Error while deleting data with id");
    } finally {
      await this.db.disconnect();
    }
  }

  async deleteAll() {
    try {
      await this.db.connect();
      await this.collection.deleteMany();
      console.log("All products were deleted successfully");
    } catch (err) {
      const error = new CustomError(
        500,
        "Error while deleting all data from table"
      );
    } finally {
      await this.db.disconnect();
    }
  }
}
