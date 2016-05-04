export interface ICrudMapper<T> {
    removeId: (entity: T) => T;
    toViewModelList: (data: any) => T[];
    toViewModel: (id: string, data: any) => T;
}