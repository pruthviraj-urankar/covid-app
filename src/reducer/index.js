import {combineReducers} from 'redux';
import { covidDataReducer } from '../covidData/reducer';
import {covidUpdateReducer} from '../covidUpdates/reducer';


export default combineReducers({
    covidData:covidDataReducer,
    covidUpdate:covidUpdateReducer
});