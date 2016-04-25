import { IStudentModel } from './IStudentModel';
import { Reducer } from 'redux';

export interface IState {
    searchTerm: string;
    studentToRemove: IStudentModel;
    students: IStudentModel[];
    routing: (state?: any, options?: any) => Reducer;
    toastr: Reducer;
}
