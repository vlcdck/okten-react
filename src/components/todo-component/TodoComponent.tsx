import './TodoComponent.css'
import {FC} from "react";
import {ITodo} from "../../models/ITodo.ts";

type PropType = {
    todo:ITodo;
}

export const TodoComponent:FC<PropType> = ({todo: {id, title, completed}}) => {
    return (
        <div>
            <p>ID - {id}</p>
            <h3 className={'text-3xl font-medium'}>{title}</h3>
            <p className={'bg-red-100'}>Status - {completed.toString()}</p>
        </div>
    );
};