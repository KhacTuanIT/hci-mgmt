import { combineReducers } from 'redux';
import packages from './packages';

const appReducers = combineReducers({
    packages
});

export default appReducers;