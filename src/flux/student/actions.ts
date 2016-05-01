import { IStudentModel, IState } from './../../models';
import * as axios from 'axios';
import * as _ from 'lodash';
import * as commonActionCreators from './../common';
import { DataSource } from './../../dataSource';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const SET_STUDENT_TO_REMOVE = 'SET_STUDENT_TO_REMOVE';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const STUDENTS_RECEIVED = 'STUDENTS_RECEIVED';

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

export function studentsReceived(students: IStudentModel[]) {
    return {
        type: STUDENTS_RECEIVED,
        students
    };
}

export function getAllStudents() {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.getAll().then(students => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(studentsReceived(students as IStudentModel[]));
        });
    }
}