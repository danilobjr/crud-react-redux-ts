import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { talkingToTheServer } from './common/reducers';
import { searchTerm, students, studentToRemove } from './student/reducers';

export const appReducer = combineReducers({
    talkingToTheServer,
    searchTerm,
    students,
    studentToRemove,
    routing: routerReducer,
    toastr: toastrReducer
});