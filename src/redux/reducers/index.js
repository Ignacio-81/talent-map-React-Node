import {combineReducers} from 'redux';
import personalDataReducer from './personalDataReducer.js';

export default combineReducers({
    personalData: personalDataReducer
})