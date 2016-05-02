import { IStudentViewModel } from './IStudentViewModel';
import { Reducer } from 'redux';

export interface IState {
    talkingToTheServer: boolean;
    searchTerm: string;
    studentToRemove: IStudentViewModel;
    students: IStudentViewModel[];
    routing: (state?: any, options?: any) => Reducer;
    toastr: Reducer;
}
