import axios from "axios";
import {LoginData} from "../models/LoginData.ts";
import {IUserWithTokens} from "../models/IUserWithToken.ts";
import {IProduct} from "../models/IProduct.ts";
import {ProductsResponseModelType} from "../models/ProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {
        username,
        password,
        expiresInMins
    });
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data} = await axiosInstance.get<ProductsResponseModelType>('/products', {})
    return data.products;
}

export const refresh = async () => {
    const IUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {
        data: {
            accessToken,
            refreshToken
        }
    } = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: IUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    IUserWithTokens.accessToken = accessToken;
    IUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(IUserWithTokens));
}