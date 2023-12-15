import { personalData } from "../model/personalData.model.js";
import { skills } from "../model/skillsData.model.js"

const insertPersonalDataMongo = async () => {
  try {
    await personalData.deleteMany(); //reset all the old products.
    await skills.deleteMany(); //reset all the old products.
    //Add new products:
    await new personalData({
        legajo: 358,
        nombre: "Ignacio",
        apellido:"Badella",
        fechaDeIngreso: "2021-06-01",
        puesto: "Developer",
        seniority: "Jr",
        idEstudioMaximoAlcanzado: 7,
        cv: "ignaciobadella.pdf",
        idNivelDeIngles: 2,
        idNivelInglesBritanico: null,
        certificadoIngles: null,
        idNivelMetAgiles: 2
    }).save();
    await new skills({
        legajo: 358,
        sistema01:{
            idSistemaOp: 1,
            idNivel: 1,
            idTiempo:3,
            comentarios: "Certificado.pdf",
        },
        sistema02:{
            idSistemaOp:8,
            idNivel:0,
            idTiempo:1,
            comentarios: "Curso Online",
        },
        otro:{
            sistemaOp:"Otro",
            idNivel:null,
            idTiempo:null,
            comentarios: null,
        },
    }).save();
    console.log("Data in MongDB inserted!");
  } catch (err) {
    throw new Error(`Error while creating Products in DataBase: ${err}`);
  }
};

export default insertPersonalDataMongo;
