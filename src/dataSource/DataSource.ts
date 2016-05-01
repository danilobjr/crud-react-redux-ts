import * as axios from 'axios';
import { IStudentModel } from './../models';
import { StudentMapper } from './../mappers';

const endPointUrl = 'https://react-redux-ts.firebaseio.com/'; 
const students = 'students.json';

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
                .get(`${endPointUrl}${students}`)
                .then(response => {
                    return StudentMapper.toStudents(response.data);
                });
        }
        // get: function(key: string): IStudentModel {
        //     return null;
        // }
    }
};