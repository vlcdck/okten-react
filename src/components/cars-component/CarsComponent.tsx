import {useEffect, useState} from "react";
import {ICar} from "../../models/ICar.ts";
import {getCars} from "../../services/api.service.ts";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getCars().then(cars => setCars(cars));
    }, []);

    return (
        <div className={'flex gap-2 justify-between flex-wrap w-5/6 m-auto'}>
            {
                cars.map(car => <CarComponent key={car.id} item={car}/>)
            }
        </div>
    );
};