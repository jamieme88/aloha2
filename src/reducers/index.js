import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import selectReducer from './selectReducer';

const allReducers = combineReducers({
    tryValue: counterReducer,
    selectReducer,
});

export default allReducers;
