
import {
    GUARDAR_DATOS_PERSONA,
    GUARDAR_DATOS_PERSONA_OK,
    GUARDAR_DATOS_PERSONA_ERROR,
    DESCARGA_DATOS_OK,
    DESCARGA_DATOS_ERROR,
    COMENZAR_DESCARGA_DATOS
} from '../types.js'

const initialState = {

    personalData:[],
    error: null,
    loading: false,

}

export default function(state = initialState, action){
    switch(action.type){
        case COMENZAR_DESCARGA_DATOS:
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}