import {IProduct} from "../models/IProduct.ts";
import {axiosInstance} from "./dummyjson.api.service.ts";
import {DummyDataResponseType} from "../models/DummyDataResponse.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IPost} from "../models/IPost.ts";

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('userToken').accessToken;
    }
    return requestObject;
})

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const data = await axiosInstance.get<DummyDataResponseType & { products: IProduct[] }>('/auth/products', {});
    return data.data.products;
}

export const loadAuthPosts = async (): Promise<IPost[]> => {
    const data = await axiosInstance.get<DummyDataResponseType & { posts: IPost[] }>('/auth/posts', {});
    return data.data.posts;
}