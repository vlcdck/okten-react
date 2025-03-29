import {ITodo} from "../models/ITodo.ts";
const baseUrlTodo = import.meta.env.VITE_API_BASE_URL + '/todos';

export const loadTodos = async (): Promise<ITodo[]> => {
    return await fetch(baseUrlTodo).then(value => value.json())
}