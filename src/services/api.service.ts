import axios from "axios";
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {"Content-Type": "application/json"},
});

export const getCars = async ():Promise<ICar[]> => {
    const response = await axiosInstance.get<ICar[]>('/cars');
    return response.data;
}

export const addCar = async (car: ICar) => {
    await axiosInstance.post('/cars', car);
}