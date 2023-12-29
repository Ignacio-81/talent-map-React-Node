import { URL_GET_LISTAS } from '../../Utils/consts.js'

import {
    DESCARGA_LISTAS_OK,
    DESCARGA_LISTAS_ERROR,
    COMENZAR_DESCARGA_DATOS
} from '../types.js'

// Download data from DB
export function getListsData() {
    return async (dispatch) => {
        dispatch(downloadListsData())
        fetch(URL_GET_LISTAS)
            .then((response) => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            console.log('fetch listas:', data.data[0])
                            dispatch(downloadListsOK(data.data[0]))
                        })
                } else {
                    console.log(response.status)
                    dispatch(downloadListsError())
                }
            })
            .catch(err => {
                console.log( "error fetch ")
                console.log(err)
                dispatch(downloadListsError())
            })
    }
}

const downloadListsData = () => ({
    type: COMENZAR_DESCARGA_DATOS,
    payload: true
})
const downloadListsOK = data => ({
    type: DESCARGA_LISTAS_OK,
    payload: data
})
const downloadListsError = () => ({
    type: DESCARGA_LISTAS_ERROR,
    payload: true
});