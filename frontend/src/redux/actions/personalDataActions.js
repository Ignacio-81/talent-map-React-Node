import { URL_GET_DATOS_PERSONALES, URL_GET_SKILLS_PERSONALES, URL_POST_DATOS_PERSONALES } from '../../Utils/consts.js'

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
                            console.log('fetch Personal Data:'+ JSON.stringify(data))
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
                            console.log('fetch skills:'+ JSON.stringify(data))
                            dispatch(downloadPersonalSkillsOK(data))
                        })
                } else {
                    console.log(response.status)
                    dispatch(downloadSkillsDataError())
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(downloadSkillsDataError())
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
    type: DESCARGA_DATOS_PERSONA_ERROR,
    payload: true
});
const downloadSkillsDataError = () => ({
    type: DESCARGA_DATOS_SKILLS_ERROR,
    payload: true
});

//Save Information on the DB
const savePersonalData = () =>({
    type: GUARDAR_DATOS_PERSONA,
    payload: true
})
const savePersonalDataOK = (data) => ({
    type: GUARDAR_DATOS_PERSONA_OK,
    payload : data
})
export const savePersonalDataError = (data) => ({
    type: GUARDAR_DATOS_PERSONA_ERROR,
    payload : data
})

export function updatePersonaInformation (request) {
    return(async (dispatch) =>{
        dispatch(savePersonalData())
        fetch (URL_POST_DATOS_PERSONALES, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request)
        })
        .then((response) => {
            response.json()
            .then(data => {
                data == 200 ? dispatch(savePersonalDataOK(data.body))
                : dispatch(savePersonalDataError(true))
            })
        })
        .catch(() => dispatch(savePersonalDataError(true)))
    })

}