import {IProduct} from "./IProduct.ts";

export type ProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
}