import { StudentDataSource } from './StudentDataSource';
import { StudentMapper } from './../mappers';

const endPointUrl = 'https://react-redux-ts.firebaseio.com'; 
const studentsCollection = '/students';

export class DataSource {
    static students: StudentDataSource = new StudentDataSource({ 
        endPointUrl, 
        collectionName: studentsCollection 
    }, new StudentMapper());
}