import {
    GUARDAR_DATOS_PERSONA,
    GUARDAR_DATOS_PERSONA_OK,
    GUARDAR_DATOS_PERSONA_ERROR,
    DESCARGA_DATOS_OK,
    DESCARGA_DATOS_ERROR,
    COMENZAR_DESCARGA_DATOS
} from '../types.js'

// Download data from DB
export function GetPersonalData(){
    return async (dispatch) =>{
        dispatch(downloadPersonalData())
    }
}

const downloadPersonalData = () => ({
    type: COMENZAR_DESCARGA_DATOS,
    payload:true
})