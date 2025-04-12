import {ResponseDummyjsonType} from "../models/ResponseDummyjsonType.ts";

const url = 'https://dummyjson.com';

export const getUsers = async (page: string): Promise<ResponseDummyjsonType> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    return await fetch(url + '/users' + '?skip=' + skip)
        .then(value => value.json());
}