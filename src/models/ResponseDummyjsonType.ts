import {IUser} from "./IUser.ts";

export interface ResponseDummyjsonType {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}