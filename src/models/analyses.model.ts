import { IUser } from './user.model';

export interface IAnalyse {
    id: string;
    name: string;
    owner?: IUser;
    createdAt?: number;
    updatedAt?: number;
}
