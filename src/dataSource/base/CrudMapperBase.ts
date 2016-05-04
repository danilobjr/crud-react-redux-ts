import { IDbEntity } from './IDbEntity';

export abstract class CrudMapperBase<T extends IDbEntity> {
    removeId(entity: T): T {
        delete entity.id;
        
        return entity;
    }
}