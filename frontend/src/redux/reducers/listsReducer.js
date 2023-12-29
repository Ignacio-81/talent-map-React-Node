
import {
    DESCARGA_LISTAS_OK,
    DESCARGA_LISTAS_ERROR,
    COMENZAR_DESCARGA_DATOS
} from '../types.js'

const initialState = {

    listsData: [],
    errorListsData: null,
    loading: false,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case COMENZAR_DESCARGA_DATOS:
            return {
                ...state,
                loading: action.payload
            }
        case DESCARGA_LISTAS_ERROR:
            return {
                ...state,
                loading: false,
                errorListsData: action.payload
            }
        case DESCARGA_LISTAS_OK:
            return {
                ...state,
                loading: false,
                errorListsData: null,
                listsData: action.payload
            }
        default:
            return state;
    }
}