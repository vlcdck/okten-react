import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";

type ProductsProp = {
    product: IProduct;
}

export const ProductComponent:FC<ProductsProp> = ({product}) => {
    return (
        <div className={'flex flex-col items-center border-2 rounded-2xl h-96 w-96'}>
            <h3>{product.id} - {product.title}</h3>
            <p>{product.price}</p>
            <img className={'w'} src={product.thumbnail} alt={product.title}/>
        </div>
    );
};