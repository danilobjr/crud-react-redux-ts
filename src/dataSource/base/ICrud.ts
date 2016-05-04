import { IDbEntity } from './IDbEntity';

export interface ICrud<T extends IDbEntity> {
    getAll: () => Promise<T[]>;
    get: (id: string) => Promise<T>;
    add: (entity: T) => Promise<string>;
    update: (entity: T) => Promise<T>;
    remove: (id: string) => Promise<string>;
}