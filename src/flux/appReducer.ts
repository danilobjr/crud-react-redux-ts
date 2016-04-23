import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { toasterMessage } from './common/reducers';
import { searchTerm, students, studentToRemove } from './student/reducers';

export const appReducer = combineReducers({
    toasterMessage,
    searchTerm,
    students,
    studentToRemove,
    routing: routerReducer
});