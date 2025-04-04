import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {CartsService} from "../../services/getDummyData.api.service.ts";
import {CartComponent} from "../cart-compnent/CartComponent.tsx";

export const CartsComponent = () => {

    const {id} = useParams();

    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (id){
            CartsService.getCartById(id)
                .then(value => setCarts(value.carts))
        }
    }, [id]);
    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent cart={cart} key={cart.id}/>)
            }
        </div>
    );
};