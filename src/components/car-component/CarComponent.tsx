import {FC} from "react";
import {ICar} from "../../models/ICar.ts";

type CarProp = {
    item: ICar;
}

export const CarComponent: FC<CarProp> = ({item}) => {
    return (
        <div className={'border-2 w-32 text-center'}>
            <h3>{item.id} - {item.brand}</h3>
            <p>Price - {item.price}</p>
            <p>Year - {item.year}</p>
        </div>
    );
};