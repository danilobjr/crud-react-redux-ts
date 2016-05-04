import { IStudent } from './IStudent';
import { Reducer } from 'redux';

export interface IState {
    talkingToTheServer: boolean;
    searchTerm: string;
    studentToRemove: IStudent;
    studentToEdit: IStudent;
    students: IStudent[];
    routing: (state?: any, options?: any) => Reducer;
    toastr: Reducer;
}
