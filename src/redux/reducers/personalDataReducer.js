
import {
    GUARDAR_DATOS_PERSONA,
    GUARDAR_DATOS_PERSONA_OK,
    GUARDAR_DATOS_PERSONA_ERROR,
    DESCARGA_DATOSPERSONALES_OK,
    DESCARGA_DATOSSKILLS_OK,
    DESCARGA_DATOS_PERSONA_ERROR,
    DESCARGA_DATOS_SKILLS_ERROR,
    COMENZAR_DESCARGA_DATOS
} from '../types.js'

const initialState = {

    personalData: [],
    personaSkills: [],
    errorPersonalData: null,
    errorSkillsData:null,
    errorPersonalDataSave:null,
    loading: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GUARDAR_DATOS_PERSONA:
        case COMENZAR_DESCARGA_DATOS:
            return {
                ...state,
                loading: action.payload
            }
        case GUARDAR_DATOS_PERSONA_OK:
            return{
                ...state,
                loading: false,
                errorPersonalDataSave: false,
            }
        case GUARDAR_DATOS_PERSONA_ERROR:
            return{
                ...state,
                loading: false,
                errorPersonalDataSave: action.payload
            }
        case DESCARGA_DATOS_SKILLS_ERROR:
            return {
                ...state,
                loading: false,
                errorSkillsData: action.payload
            }
        case DESCARGA_DATOS_PERSONA_ERROR:
            return {
                ...state,
                loading: false,
                errorPersonalData: action.payload
            }
        case DESCARGA_DATOSPERSONALES_OK:
            return {
                ...state,
                loading: false,
                errorPersonalData: null,
                personalData: action.payload
            }
        case DESCARGA_DATOSSKILLS_OK:
            return {
                ...state,
                errorSkillsData: null,
                personaSkills: action.payload,
                loading: false
            }
        default:
            return state;
    }
}