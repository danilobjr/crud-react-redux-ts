import * as axios from 'axios';
import { ICrud } from './ICrud';
import { ICrudConfig } from './ICrudConfig';
import { ICrudMapper } from './ICrudMapper';
import { IDbEntity } from './IDbEntity';

export class CrudGeneric<T extends IDbEntity> implements ICrud<T> {
    protected endPointUrl: string;
    protected collectionName: string;
    protected mapper: ICrudMapper<T>;
    
    constructor(crudConfig: ICrudConfig, mapper: ICrudMapper<T>) {
        this.endPointUrl = crudConfig.endPointUrl;
        this.collectionName = crudConfig.collectionName;
        this.mapper = mapper;
    }
    
    getAll(): Promise<T[]> {
        return axios
            .get(`${this.endPointUrl}/${this.collectionName}.json`)
            .then(response => this.mapper.toViewModelList(response.data));
    }
    
    get(id: string): Promise<T> {
        return axios
            .get(`${this.endPointUrl}/${this.collectionName}/${id}.json`)
            .then(response => this.mapper.toViewModel(id, response.data));
    }
    
    add(entity: T): Promise<string> {
        entity = this.mapper.removeId(entity);
                
        return axios
            .post(`${this.endPointUrl}/${this.collectionName}.json`, entity)
            .then(response => (response.data as any).name);
    }
    
    update(entity: T): Promise<T> {
        const entityId = entity.id;
        entity = this.mapper.removeId(entity);
                
        return axios
            .put(`${this.endPointUrl}/${this.collectionName}/${entityId}.json`, entity)
            .then(response => response.data);
    }
    
    remove(id: string): Promise<string> {
        return axios
            .delete(`${this.endPointUrl}/${this.collectionName}/${id}.json`)
            .then(() => id);
    }
}