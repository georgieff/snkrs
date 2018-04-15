import {combineReducers} from 'redux';
import sneakers from './sneakerReducer';

const rootReducer = combineReducers({
    sneakers
});

export default rootReducer;
