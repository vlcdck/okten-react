import {ProductModel} from "./ProductModel.ts";

export interface ResponseProductsDummyjson {
    products: ProductModel[];
    total: number;
    skip: number;
    limit: number;
}


