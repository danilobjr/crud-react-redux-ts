import * as axios from 'axios';
import { IStudentModel } from './../models';
import { StudentMapper } from './../mappers';

const endPointUrl = 'https://react-redux-ts.firebaseio.com'; 
const students = '/students';

interface ICrudMethods<T> {
    getAll: () => Promise<T[]>;
    get: (key: string) => Promise<T>;
}

export interface IDataSource {
    students: ICrudMethods<IStudentModel>;
}

export const DataSource: IDataSource = {
    students: {
        getAll: function(): Promise<IStudentModel[]> {
            return axios
                .get(`${endPointUrl}${students}.json`)
                .then(response => {
                    return StudentMapper.toStudents(response.data);
                });
        },
        get: function(id: string): Promise<IStudentModel> {
            return axios
                .get(`${endPointUrl}${students}/${id}.json`)
                .then(response => {
                    console.log(response.data);
                    return response.data;
                });
        }
    }
};