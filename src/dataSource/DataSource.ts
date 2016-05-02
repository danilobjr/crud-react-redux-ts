import * as axios from 'axios';
import { IStudentViewModel, IStudentDBModel } from './../models';
import { StudentMapper } from './../mappers';

const endPointUrl = 'https://react-redux-ts.firebaseio.com'; 
const students = '/students';

interface ICrudMethods<T> {
    getAll: () => Promise<T[]>;
    get: (key: string) => Promise<T>;
    save: (entity: T) => Promise<T>;
    remove: (key: string) => Promise<string>;
}

export interface IDataSource {
    students: ICrudMethods<IStudentViewModel>;
}

export const DataSource: IDataSource = {
    students: {
        getAll: function(): Promise<IStudentViewModel[]> {
            return axios
                .get(`${endPointUrl}${students}.json`)
                .then(response => StudentMapper.toStudents(response.data));
        },
        get: function(id: string): Promise<IStudentViewModel> {
            return axios
                .get(`${endPointUrl}${students}/${id}.json`)
                .then(response => response.data);
        },
        save: function (studentViewModel: IStudentViewModel): Promise<IStudentViewModel> {
            const studentDBModel: IStudentDBModel = StudentMapper.toStudentDBModel(studentViewModel);
            
            return axios
                .post(`${endPointUrl}${students}.json`, studentDBModel)
                .then(response => {
                    const id: string = (response.data as any).name;
                    return StudentMapper.toStudentViewModel(id, studentViewModel);
                });
        },
        remove: function (studentId: string): Promise<string> {
            return axios
                .delete(`${endPointUrl}${students}/${studentId}.json`)
                .then(() => studentId);
        }
    }
};