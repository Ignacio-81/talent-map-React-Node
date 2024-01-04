import { personalData } from "../model/personalData.model.js";
import { skills } from "../model/skillsData.model.js"
import { lists } from "../model/lists.model.js"

const insertPersonalDataMongo = async () => {
    try {
        await personalData.deleteMany(); //reset all the old products.
        await skills.deleteMany(); //reset all the old products.
        await lists.deleteMany();
        //Add new info:
        await new personalData({
            id: 358,
            legajo: 358,
            nombre: "Ignacio",
            apellido: "Badella",
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
            id: 358,
            sistema01: {
                idSistemaOp: 1,
                idNivel: 1,
                idTiempo: 3,
                comentarios: "Certificado.pdf",
            },
            sistema02: {
                idSistemaOp: 8,
                idNivel: 0,
                idTiempo: 1,
                comentarios: "Curso Online",
            },
            otro: {
                sistemaOp: "Otro",
                idNivel: null,
                idTiempo: null,
                comentarios: null,
            },
        }).save();
        await new lists({
            nivel: [
                { id: 0, data: "Inicial" },
                { id: 1, data: "Intermedio" },
                { id: 2, data: "Avanzado" },
                { id: 3, data: "Certificado" }
            ],
            estudios: [
                { id: 0, data: "Primario" },
                { id: 1, data: "Secundario" },
                { id: 2, data: "Terciario" },
                { id: 3, data: "Terciario en curso" },
                { id: 4, data: "Terciario en suspenso" },
                { id: 5, data: "Universitario en curso" },
                { id: 6, data: "Universitario en suspenso" },
                { id: 7, data: "Universitario completo" },
                { id: 8, data: "Posgrado en curso" },
                { id: 9, data: "Posgrado en suspenso" },
                { id: 10, data: "Posgrado completo" }
            ],
            sistemasOperativos: [
                { id: 0, data: "LINUX" },
                { id: 1, data: "WINDOWS" },
                { id: 2, data: "UBUNTU SERVER" },
                { id: 3, data: "CITRIX" },
                { id: 4, data: "WEBLOGIC " },
                { id: 5, data: "APACHE" },
                { id: 6, data: "ORACLE LINUX" },
                { id: 7, data: "HTTP SERVER ORACLE OHS" },
                { id: 8, data: "NGINX" },
                { id: 9, data: "TOMCAT" }
            ],
            nivelInglesBritanicoTxt: [
                { id: 0, data: "A1" },
                { id: 1, data: "A2" },
                { id: 2, data: "B1" },
                { id: 3, data: "B2" },
                { id: 4, data: "C1" },
                { id: 5, data: "C2" },
            ],
            tiempo: [
                { id: 0, data: "En formación" },
                { id: 1, data: "0 - 6 meses" },
                { id: 2, data: "1 año" },
                { id: 3, data: "2 años" },
                { id: 4, data: "3 años" },
                { id: 5, data: "más de 5 años" },
            ]
        }).save();
        console.log("Data in MongDB inserted!");
    } catch (err) {
        throw new Error(`Error while creating Products in DataBase: ${err}`);
    }
};

export default insertPersonalDataMongo;
