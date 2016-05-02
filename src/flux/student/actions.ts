import * as axios from 'axios';
import * as _ from 'lodash';
import * as uuid from 'node-uuid';
import { toastr } from 'react-redux-toastr';
import { hashHistory } from 'react-router';
import * as commonActionCreators from './../common';
import { dataSource } from './../../dataSource';
import { IStudentViewModel, IState } from './../../models';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const SET_STUDENT_TO_REMOVE = 'SET_STUDENT_TO_REMOVE';
export const REMOVE_STUDENT_FROM_LIST = 'REMOVE_STUDENT_FROM_LIST';
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

export function removeStudentFromList(id: string) {
    return {
        type: REMOVE_STUDENT_FROM_LIST,
        id        
    };
}

export function studentsReceived(students: IStudentViewModel[]) {
    return {
        type: STUDENTS_RECEIVED,
        students
    };
}

export function saveStudentOnServer(student: IStudentViewModel) {
    student.registrationNumber = uuid.v4();
    
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        dataSource.students.addOrUpdate(student).then(studentSaved => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            hashHistory.push('/students');
            toastr.success('Student saved');
        });
    }
}

export function removeStudentOnServer(id: string) {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        dataSource.students.remove(id).then(studentId => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(removeStudentFromList(id));
            toastr.success('Student removed');
        });
    }
}

export function updateStudentOnServer(editedStudent: IStudentViewModel) {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        dataSource.students.addOrUpdate(editedStudent).then(updatedStudent => {
            hashHistory.push('/students');
            toastr.success(`Student updated. Registration Number: ${updatedStudent.registrationNumber}`);
        });
    }
}

export function getAllStudentsFromServer() {
    return function (dispatch: Redux.Dispatch, getState: () => IState) {
        dispatch(commonActionCreators.talkingToTheServer());
        
        dataSource.students.getAll().then(students => {
            dispatch(commonActionCreators.finishTalkingToTheServer());
            dispatch(studentsReceived(students as IStudentViewModel[]));
        });
    }
}