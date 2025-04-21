import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../../services/api.service.ts";
import {IProduct} from "../../models/IProduct.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const AuthProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        loadAuthProducts().then(products => {
            setProducts(products);
        }).catch(() => {
            refresh()
                .then(() => loadAuthProducts())
                .then(products => setProducts(products));
        })
    }, []);

    return (
        <div className={'flex flex-wrap gap-2 justify-center'}>
            {
                products.map(product => <ProductComponent item={product} key={product.id}/>)
            }
        </div>
    );
};