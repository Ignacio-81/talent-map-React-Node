import {combineReducers} from 'redux';
import personalDataReducer from './personalDataReducer.js';
import listsReducer from './listsReducer.js'

export default combineReducers({
    personalData: personalDataReducer,
    listsData: listsReducer
})