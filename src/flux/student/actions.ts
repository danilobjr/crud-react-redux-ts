import { IStudentModel, IState } from './../../models';
import * as axios from 'axios';
import * as _ from 'lodash';

export const TALKING_TO_THE_SERVER = 'TALKING_TO_THE_SERVER';
export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const SET_STUDENT_TO_REMOVE = 'SET_STUDENT_TO_REMOVE';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const STUDENTS_RECEIVED = 'STUDENTS_RECEIVED';
export const FINISH_TALKING_TO_SERVER = 'FINISH_TALKING_TO_SERVER';

export function changeSearchTerm(searchTerm: string) {
    return {
        type: CHANGE_SEARCH_TERM,
        searchTerm
    };
}

export function setStudentToRemove(student: IStudentModel) {
    return {
        type: SET_STUDENT_TO_REMOVE,
        student
    };
}

export function addStudent(newStudent: IStudentModel) {
    return {
        type: ADD_STUDENT,
        newStudent
    };
}

export function removeStudent(registrationNumber: string) {
    return {
        type: REMOVE_STUDENT,
        registrationNumber
    };
}

export function editStudent(editedStudent: IStudentModel) {
    return {
        type: EDIT_STUDENT,
        editedStudent
    };
}

// TODO: put this action creator in another file
export function talkingToTheServer() {
    return {
        type: TALKING_TO_THE_SERVER        
    }
}

// TODO: put this action creator in another file
export function finishTalkingToTheServer() {
    return {
        type: FINISH_TALKING_TO_SERVER
    };
}

export function studentsReceived(students: IStudentModel[]) {
    return {
        type: STUDENTS_RECEIVED,
        students
    };
}

// TODO: refator: needs a DataSource and a Formatter
export function getAllStudents() {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(talkingToTheServer());
        
        axios
            .get('https://react-redux-ts.firebaseio.com/students.json')
            .then(response => {
                const students = _.chain(response.data)
                    .mapValues((s, id) => _.merge(s, { id }))
                    .toArray()
                    .value();
                
                return students;    
            })
            .then(students => {
                dispatch(finishTalkingToTheServer());
                dispatch(studentsReceived(students as IStudentModel[]));                
            })
            .catch(error => console.error(error));
    }
}