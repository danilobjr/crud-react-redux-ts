import * as _ from 'lodash';
import { IStudentModel } from './../models';

export class StudentMapper {
    static toStudents(data: any): IStudentModel[] {
         return _.chain(data)
            .mapValues((student, id) => _.merge(student, { id }))
            .toArray()
            .value() as IStudentModel[];
    }
}