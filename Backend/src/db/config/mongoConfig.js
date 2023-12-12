import mongoose from "mongoose";
import { configObject } from "./index.js";

export async function mongoConnect() {
    try {
        const URL = configObject.mongoUrl;
        let res = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected');
    } catch (e) {
        throw new Error(`Error while connecting to Mongo DB ${e}`)
    }
}

