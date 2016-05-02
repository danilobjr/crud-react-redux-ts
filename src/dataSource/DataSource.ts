import * as axios from 'axios';
import { IStudentViewModel, IStudentDBModel } from './../models';
import { StudentMapper } from './../mappers';

const endPointUrl = 'https://react-redux-ts.firebaseio.com'; 
const students = '/students';

interface ICrudMethods<T> {
    getAll: () => Promise<T[]>;
    get: (key: string) => Promise<T>;
    addOrUpdate: (entity: T) => Promise<T>;
    remove: (key: string) => Promise<string>;
}

class StudentsDataSource implements ICrudMethods<IStudentViewModel> {
    getAll(): Promise<IStudentViewModel[]> {
        return axios
            .get(`${endPointUrl}${students}.json`)
            .then(response => StudentMapper.toStudents(response.data));
    }
    
    get(studentId: string): Promise<IStudentViewModel> {
        return axios
            .get(`${endPointUrl}${students}/${studentId}.json`)
            .then(response => response.data);
    }
    
    addOrUpdate(studentViewModel: IStudentViewModel): Promise<IStudentViewModel> {
        const hasId = !!studentViewModel.id;
        
        if (hasId) {
            return this.update(studentViewModel);
        } else {
            return this.add(studentViewModel);            
        }
    }
    
    private add(newStudent: IStudentViewModel): Promise<IStudentViewModel> {
        const studentDBModel: IStudentDBModel = StudentMapper.toStudentDBModel(newStudent);

        return axios
            .post(`${endPointUrl}${students}.json`, studentDBModel)
            .then(response => {
                const id: string = (response.data as any).name;
                return StudentMapper.toStudentViewModel(id, studentDBModel);
            });
    }
    
    private update(studentViewModel: IStudentViewModel): Promise<IStudentViewModel> {
        const studentDBModel = StudentMapper.toStudentDBModel(studentViewModel);
        
        return axios
            .put(`${endPointUrl}${students}/${studentViewModel.id}.json`, studentDBModel)
            .then(response => response.data);
    }
    
    remove(studentId: string): Promise<string> {
        return axios
            .delete(`${endPointUrl}${students}/${studentId}.json`)
            .then(() => studentId);
    }
}

interface IDataSource {
    students: StudentsDataSource;
}

class DataSource implements IDataSource {
    public students: StudentsDataSource;
    
    constructor() {
        this.students = new StudentsDataSource();
    }
}

export const dataSource: DataSource = new DataSource();
