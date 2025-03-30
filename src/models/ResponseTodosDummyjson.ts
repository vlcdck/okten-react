import {TodoModel} from "./TodoModel.ts";

export interface ResponseTodosDummyjson {
    todos: TodoModel[];
    total: number;
    skip: number;
    limit: number;
}