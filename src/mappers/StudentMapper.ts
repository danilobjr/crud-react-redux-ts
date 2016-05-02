import * as _ from 'lodash';
import { IStudentViewModel, IStudentDBModel } from './../models';

export class StudentMapper {
    static toStudents(data: any): IStudentViewModel[] {
         return _.chain(data)
            .mapValues((student, id) => _.merge(student, { id }))
            .toArray()
            .value() as IStudentViewModel[];
    }
    
    static toStudentDBModel(viewModel: IStudentViewModel): IStudentDBModel {
        return {
            registrationNumber: viewModel.registrationNumber,
            name: viewModel.name,
            registered: viewModel.registered
        };
    }
    
    static toStudentViewModel(id: string, studentDBModel: IStudentViewModel | IStudentDBModel): IStudentViewModel {
        return _.assign({}, studentDBModel, { id })  as IStudentViewModel;
    }
}