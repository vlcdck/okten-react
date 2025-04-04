import {FC} from "react";
import {ICart} from "../../models/ICart.ts";

type CartProp = {
    cart: ICart;
}

export const CartComponent:FC<CartProp> = ({cart}) => {
    return (
        <div>
            {cart.total}
        </div>
    );
};