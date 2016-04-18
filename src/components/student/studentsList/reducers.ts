import * as _ from 'lodash';
import { REMOVE_STUDENT, CHANGE_SEARCH_TERM, SET_STUDENT_TO_REMOVE } from './actions';

export function students(state = [], action) {
    switch (action.type) {
        case REMOVE_STUDENT:
            const studentToRemove = _.find(state, student => {
                return student.registrationNumber === action.registrationNumber
            });
            
            const index = state.indexOf(studentToRemove);
        
            return _.assign({}, state, [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]);
        default:
            return state;
    }
}

export function searchTerm(state = '', action) {
    switch (action.type) {
        case CHANGE_SEARCH_TERM:
            return action.searchTerm;
        default:
            return state;
    }
}

export function studentToRemove(state = {}, action) {
    switch (action.type) {
        case SET_STUDENT_TO_REMOVE:
            return _.assign({}, state, action.student);
        default:
            return state;
    }
}