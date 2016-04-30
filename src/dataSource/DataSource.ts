import * as axios from 'axios';
import { IStudentModel } from './../models';
import { StudentFormatter } from './../formatters';

const endPointUrl = 'https://react-redux-ts.firebaseio.com/'; 

interface ICrudMethods<T> {
    getAll: () => Promise<T[]>;
    // get: (key: string) => T;
}

export interface IDataSource {
    students: ICrudMethods<IStudentModel>;
}

export const DataSource: IDataSource = {
    students: {
        getAll: function(): Promise<IStudentModel[]> {
            return axios
                .get(`${endPointUrl}students.json`)
                .then(response => {
                    return StudentFormatter.toStudents(response.data);
                });
        }
        // get: function(key: string): IStudentModel {
        //     return null;
        // }
    }
};