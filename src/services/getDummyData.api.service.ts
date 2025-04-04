import {IUser} from "../models/IUser.ts";
import {DummyResponseType} from "../models/DummyResponseType.ts";
import {ICart} from "../models/ICart.ts";

const baseDummyJsonUrl = import.meta.env.VITE_DUMMYJSON_BASE_URL;

export const UserService = {
    getAllUsers: async ():Promise<DummyResponseType & {users: IUser[]}> => {
        return await fetch(`${baseDummyJsonUrl}/users`).then(res => res.json());
    }
}
export const CartsService = {
    getCartById: async (id: string):Promise<DummyResponseType & {carts: ICart[]}> => {
        return await fetch(`${baseDummyJsonUrl}/carts/user/${id}`).then(res => res.json());
    }
}