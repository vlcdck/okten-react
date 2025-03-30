import {ProductModel} from "../models/ProductModel.ts";
import {ResponseProductsDummyjson} from "../models/ResponseProductsDummyjson.ts";

const endpointProducts = import.meta.env.VITE_API_BASE_URL + "/products";

const getProducts = async (): Promise<ProductModel[]> => {
    const response: ResponseProductsDummyjson = await fetch(endpointProducts)
        .then((res) => res.json())
    return response.products;
}
export {
    getProducts,
}

