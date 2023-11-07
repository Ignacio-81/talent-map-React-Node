import { URL_GET_DATOS_PERSONALES, URL_GET_SKILLS_PERSONALES } from '../../Utils/consts.js'

import {
    /* GUARDAR_DATOS_PERSONA,
    GUARDAR_DATOS_PERSONA_OK,
    GUARDAR_DATOS_PERSONA_ERROR, */
    DESCARGA_DATOSPERSONALES_OK,
    DESCARGA_DATOSSKILLS_OK,
    DESCARGA_DATOS_ERROR,
    COMENZAR_DESCARGA_DATOS
} from '../types.js'

// Download data from DB
export function getPersonalData() {
    return async (dispatch) => {
        dispatch(downloadPersonalData())
        fetch(URL_GET_DATOS_PERSONALES, {
            method: 'GET',
        })
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            console.log('fetch:'+ JSON.stringify(data))
                            dispatch(downloadPersonalDataOK(data))
                        })
                } else {
                    console.log(response.status)
                    dispatch(downloadPersonalDataError())
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(downloadPersonalDataError())
            })
    }
}

// Download data from DB
export function getPersonalSkills() {
    return async (dispatch) => {
        dispatch(downloadPersonalData())
        fetch(URL_GET_SKILLS_PERSONALES, {
            method: 'GET',
        })
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            console.log('fetch:'+ JSON.stringify(data))
                            dispatch(downloadPersonalSkillsOK(data))
                        })
                } else {
                    console.log(response.status)
                    dispatch(downloadPersonalDataError())
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(downloadPersonalDataError())
            })
    }
}

const downloadPersonalData = () => ({
    type: COMENZAR_DESCARGA_DATOS,
    payload: true
})
const downloadPersonalSkillsOK = data => ({
    type: DESCARGA_DATOSSKILLS_OK,
    payload: data
})
const downloadPersonalDataOK = data => ({
    type: DESCARGA_DATOSPERSONALES_OK,
    payload: data
})
const downloadPersonalDataError = () => ({
    type: DESCARGA_DATOS_ERROR,
    payload: true
});