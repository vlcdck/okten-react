import {useEffect, useState} from "react";
import {TodoModel} from "../../models/TodoModel.ts";
import {getTodos} from "../../service/api.service.ts";
import {TodoComponent} from "../todo-component/TodoComponent.tsx";

export const TodosComponent = () => {

    const [todos, setTodos] = useState<TodoModel[]>([])

    useEffect(() => {
        getTodos()
            .then(todos => setTodos(todos))
    }, [])

    return (
        <div>
            {todos.map(todo => <TodoComponent key={todo.id} item={todo}/>)}
        </div>
    );
};