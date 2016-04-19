
import { IStudentModel } from './../IStudentModel';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const SET_STUDENT_TO_REMOVE = 'SET_STUDENT_TO_REMOVE';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';

export function changeSearchTerm(searchTerm: string) {
    return {
        type: CHANGE_SEARCH_TERM,
        searchTerm
    };
}

export function removeStudent(registrationNumber: string) {
    return {
        type: REMOVE_STUDENT,
        registrationNumber
    };
}

export function setStudentToRemove(student: IStudentModel) {
    return {
        type: SET_STUDENT_TO_REMOVE,
        student
    };
}