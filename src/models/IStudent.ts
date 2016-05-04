import { IDbEntity } from './../dataSource/base';

export interface IStudent extends IDbEntity {
    registrationNumber: string;
    name: string;
    registered: boolean;
}