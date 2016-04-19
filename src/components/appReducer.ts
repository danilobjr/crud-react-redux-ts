import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { searchTerm, students, studentToRemove } from './student/list/reducers';

export const appReducer = combineReducers({
    searchTerm,
    students,
    studentToRemove,
    routing: routerReducer
});