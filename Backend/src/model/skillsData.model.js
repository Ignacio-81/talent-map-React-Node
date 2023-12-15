import { model, Schema } from "mongoose";

const skillsSchema = new Schema({
    legajo: { type: Schema.Types.Number, require: true, max: 1000 },
    sistema01:{
        idSistemaOp:{ type: Schema.Types.Number, require: true, max: 10 },
        idNivel:{ type: Schema.Types.Number, require: true, max: 10 },
        idTiempo:{ type: Schema.Types.Number, require: true, max: 10 },
        comentarios: { type: Schema.Types.String, require: true, max: 1000 },
    },
    sistema02:{
        idSistemaOp:{ type: Schema.Types.Number, require: true, max: 10 },
        idNivel:{ type: Schema.Types.Number, require: true, max: 10 },
        idTiempo:{ type: Schema.Types.Number, require: true, max: 10 },
        comentarios: { type: Schema.Types.String, require: true, max: 1000 },
    },
    otro:{
        sistemaOp:{ type: Schema.Types.String, require: true, max: 1000 },
        idNivel:{ type: Schema.Types.Number, require: true, max: 10 },
        idTiempo:{ type: Schema.Types.Number, require: true, max: 10 },
        comentarios: { type: Schema.Types.String, require: true, max: 1000 },
    },
});

export const skills = model("skills", skillsSchema);