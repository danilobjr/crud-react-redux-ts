import * as _ from 'lodash';
import { IStudent } from './../models';
import { ICrudMapper, CrudMapperBase } from './../dataSource/base';

export class StudentMapper extends CrudMapperBase<IStudent> implements ICrudMapper<IStudent> {
    toViewModelList(data: any): IStudent[] {
         return _.chain(data)
            .mapValues((student, id) => _.merge(student, { id }))
            .toArray()
            .value() as IStudent[];
    }
    
    toViewModel(id: string, student: IStudent): IStudent {
        return _.assign({}, student, { id })  as IStudent;
    }
}
