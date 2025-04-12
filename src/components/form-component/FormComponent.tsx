import {useForm} from "react-hook-form";
import {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validation/carValidator.ts";

export const FormComponent = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    const createHandler = (data: ICar) => {
        addCar(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(createHandler)}>
                <label>
                    <input type="text" {...register("brand")}/>
                    {errors.brand && <span>{errors.brand.message}</span>}
                </label>
                <label>
                    <input type="number" {...register('year')}/>
                    {errors.year && <span>{errors.year.message}</span>}
                </label>
                <label>
                    <input type="number" {...register('price')}/>
                    {errors.price && <span>{errors.price.message}</span>}
                </label>
                <button>Create Car</button>
            </form>
        </>
    );
};