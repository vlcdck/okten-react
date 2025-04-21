import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";

type ProductProp = {
    item: IProduct;
}

export const ProductComponent:FC<ProductProp> = ({item}) => {
    return (
        <div className={'w-32 h-32 border-2 text-center'}>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
        </div>
    );
};