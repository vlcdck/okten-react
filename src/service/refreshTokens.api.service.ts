import {retriveLocalStorage} from "./helpers.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {axiosInstance} from "./dummyjson.api.service.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

export const refreshTokens = async () => {
    const userWithTokens = retriveLocalStorage<IUserWithTokens>('userToken');
    const {
        data: {
            accessToken,
            refreshToken
        }
    } = await axiosInstance.post<ITokenPair>('/auth/refresh', {
        refreshToken: userWithTokens.refreshToken
    });
    userWithTokens.refreshToken = refreshToken;
    userWithTokens.accessToken = accessToken;

    localStorage.setItem('userToken', JSON.stringify(userWithTokens));
}