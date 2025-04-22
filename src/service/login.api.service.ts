import {LoginData} from "../models/LoginData.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {axiosInstance} from "./dummyjson.api.service.ts";

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/auth/login", {
        username,
        password,
        expiresInMins
    });
    localStorage.setItem('userToken', JSON.stringify(userWithTokens))
    return userWithTokens;
}