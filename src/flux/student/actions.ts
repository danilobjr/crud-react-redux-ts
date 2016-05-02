import * as axios from 'axios';
import * as _ from 'lodash';
import * as uuid from 'node-uuid';
import { toastr } from 'react-redux-toastr';
import { hashHistory } from 'react-router';
import * as commonActionCreators from './../common';
import { DataSource } from './../../dataSource';
import { IStudentViewModel, IState } from './../../models';

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

export function setStudentToRemove(student: IStudentViewModel) {
    return {
        type: SET_STUDENT_TO_REMOVE,
        student
    };
}

export function saveStudent(student: IStudentViewModel) {
    student.registrationNumber = uuid.v4();
    
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.save(student).then(studentSaved => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            hashHistory.push('/students');
            toastr.success('Student saved');
        });
    }
}

export function removeStudent(registrationNumber: string) {
    return {
        type: REMOVE_STUDENT,
        registrationNumber
    };
}

export function editStudent(editedStudent: IStudentViewModel) {
    return {
        type: EDIT_STUDENT,
        editedStudent
    };
}

export function studentsReceived(students: IStudentViewModel[]) {
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
            dispatch(studentsReceived(students as IStudentViewModel[]));
        });
    }
}