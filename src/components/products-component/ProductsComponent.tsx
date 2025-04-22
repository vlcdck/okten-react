import {useEffect, useState} from "react";
import {IProduct} from "../../models/IProduct.ts";
import {loadAuthProducts} from "../../service/loadData.api.service.ts";
import {refreshTokens} from "../../service/refreshTokens.api.service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        loadAuthProducts()
            .then(products => setProducts(products))
            .catch(() => refreshTokens()
                .then(() => loadAuthProducts()
                    .then(products => setProducts(products))))
    })

    return (
        <div className={'flex flex-wrap items-center gap-4 w-2/3 m-auto mt-4 mb-4'}>
            {
                products.map(product => <ProductComponent product={product} key={product.id}/>)
            }
        </div>
    );
};