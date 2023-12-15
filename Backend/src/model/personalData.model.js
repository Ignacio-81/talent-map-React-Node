import { model, Schema } from "mongoose";

const personalDataSchema = new Schema({
    nombre: { type: Schema.Types.String, require: true, max: 50 },
    apellido: { type: Schema.Types.String, require: true, max: 50 },
    legajo: { type: Schema.Types.Number, require: true, max: 1000 },
    fechaDeIngreso: { type: Schema.Types.String, require: true, max: 50 },
    puesto: { type: Schema.Types.String, require: true, max: 50 },
    seniority: { type: Schema.Types.String, require: true, max: 50 },
    idEstudioMaximoAlcanzado: { type: Schema.Types.Number, require: true, max: 10 },
    cv: { type: Schema.Types.String, require: true, max: 100 },
    idNivelDeIngles: { type: Schema.Types.Number, require: true, max: 10 },
    idNivelInglesBritanico:{ type: Schema.Types.Number, require: true, max: 10 },
    certificadoIngles: { type: Schema.Types.String, require: true, max: 1000 },
    idNivelMetAgiles: { type: Schema.Types.Number, require: true, max: 10 }
});

export const personalData = model("personalData", personalDataSchema);