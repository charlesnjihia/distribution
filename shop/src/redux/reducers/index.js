import productReducer  from './productsReducer';
import scheduleReducer from './schedulesReducer';
import {combineReducers} from 'redux';


const allReducers=combineReducers({
scheduleReducer,productReducer
})
export default allReducers;
