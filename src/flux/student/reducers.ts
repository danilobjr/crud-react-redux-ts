import * as _ from 'lodash';
import * as uuid from 'node-uuid';
import { IStudent } from './../../models';
import { REMOVE_STUDENT_FROM_LIST, STUDENTS_RECEIVED,
         CHANGE_SEARCH_TERM, SET_STUDENT_TO_REMOVE, 
         SET_STUDENT_TO_EDITION, SET_STUDENT_TO_SEE_DETAILS } from './actions';

export function students(state = [], action): IStudent[] {
    switch (action.type) {
        case STUDENTS_RECEIVED: {
            return [].concat(action.students);
        }
        case REMOVE_STUDENT_FROM_LIST: {
            const studentToRemove = _.find(state, (student) => {
                return student.id === action.id
            });
            
            const index = state.indexOf(studentToRemove);
        
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }
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

export function studentToEdit(state = {}, action) {
    switch (action.type) {
        case SET_STUDENT_TO_EDITION:
            return _.assign({}, state, action.student);
        default:
            return state;
    }
}

export function studentToSeeDetails(state = {}, action) {
    switch (action.type) {
        case SET_STUDENT_TO_SEE_DETAILS:
            return _.assign({}, state, action.student);    
        default:
            return state;
    }
}