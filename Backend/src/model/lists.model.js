import { model, Schema } from "mongoose";

const listsSchema = new Schema({
    nivel: { type: Schema.Types.Array, require: true, max: 100 },
    estudios: { type: Schema.Types.Array, require: true, max: 50 },
    sistemasOperativos: { type: Schema.Types.Array, require: true, max: 50 },
    nivelInglesBritanicoTxt: { type: Schema.Types.Array, require: true, max: 50 },
    tiempo: { type: Schema.Types.Array, require: true, max: 50 },
});

export const lists = model("lists", listsSchema);