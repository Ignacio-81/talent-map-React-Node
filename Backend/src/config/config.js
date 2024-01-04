import dotenv from "dotenv";

dotenv.config();

const config = {
  mode_env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  host: process.env.HOST || "localhost",
  mongoDb: process.env.MONGO_URL,
  apikeyMongoStoreSession: process.env.AKMSS,
  searchIdForMongo: "id"
};

export default config;
