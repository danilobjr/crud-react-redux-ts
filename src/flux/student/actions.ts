import * as axios from 'axios';
import * as _ from 'lodash';
import * as uuid from 'node-uuid';
import { toastr } from 'react-redux-toastr';
import { hashHistory } from 'react-router';
import * as commonActionCreators from './../common';
import { DataSource } from './../../dataSource';
import { IStudent, IState } from './../../models';
import { StudentMapper } from './../../mappers';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const SET_STUDENT_TO_REMOVE = 'SET_STUDENT_TO_REMOVE';
export const REMOVE_STUDENT_FROM_LIST = 'REMOVE_STUDENT_FROM_LIST';
export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const STUDENTS_RECEIVED = 'STUDENTS_RECEIVED';
export const SET_STUDENT_TO_EDITION = 'SET_STUDENT_TO_EDITION';
export const SET_STUDENT_TO_SEE_DETAILS = 'SET_STUDENT_TO_SEE_DETAILS';

export function changeSearchTerm(searchTerm: string) {
    return {
        type: CHANGE_SEARCH_TERM,
        searchTerm
    };
}

export function setStudentToRemove(student: IStudent) {
    return {
        type: SET_STUDENT_TO_REMOVE,
        student
    };
}

export function removeStudentFromList(id: string) {
    return {
        type: REMOVE_STUDENT_FROM_LIST,
        id
    };
}

export function studentsReceived(students: IStudent[]) {
    return {
        type: STUDENTS_RECEIVED,
        students
    };
}

export function setStudentToEdition(student: IStudent) {
    return {
        type: SET_STUDENT_TO_EDITION,
        student
    };
}

export function setStudentToSeeDetails(student: IStudent) {
    return {
        type: SET_STUDENT_TO_SEE_DETAILS,
        student
    };
}

export function saveStudentOnServer(student: IStudent) {
    student.registrationNumber = uuid.v4();
    
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.add(student).then(studentId => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            hashHistory.push('/students');
            toastr.success('Student saved');
        });
    }
}

export function getStudentFromServerToEdit(id: string) {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.get(id).then(student => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(setStudentToEdition(student));
        });
    }
}

export function updateStudentOnServer(editedStudent: IStudent) {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.update(editedStudent).then(updatedStudent => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            hashHistory.push('/students');
            toastr.success('Student updated');
        });
    }
}

export function removeStudentOnServer(id: string) {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.remove(id).then(studentId => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(removeStudentFromList(studentId));
            toastr.success('Student removed');
        });
    }
}

export function getAllStudentsFromServer() {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.getAll().then(students => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(studentsReceived(students));
        });
    }
}

export function getStudentFromServerToSeeDetails(id: string) {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        DataSource.students.get(id).then(student => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(setStudentToSeeDetails(student));
        });
    }
}