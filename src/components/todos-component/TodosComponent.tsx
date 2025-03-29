import {useEffect, useState} from "react";
import {ITodo} from "../../models/ITodo.ts";
import {loadTodos} from "../../services/api.service.ts";
import { TodoComponent } from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        loadTodos().then(value => setTodos(value))
    }, [])

    return (
        <>
            {
                todos.map(todo  => <TodoComponent todo={todo} key={todo.id}/>)
            }
        </>
    );
};