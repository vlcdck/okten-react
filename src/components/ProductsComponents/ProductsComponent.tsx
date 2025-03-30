import {useEffect, useState} from "react";
import {ProductModel} from "../../models/ProductModel.ts";
import {getProducts} from "../../services/api.service.ts";
import {ProductComponent} from "../ProductComponent/ProductComponent.tsx";

export const ProductsComponent = () => {

    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        getProducts()
            .then(products => setProducts(products))
    }, [])

    return (
        <div className={'flex flex-wrap justify-center gap-2.5'}>
            {products.map((product) => <ProductComponent key={product.id} item={product} />)}
        </div>
    );
};