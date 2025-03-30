import {ResponsePostsDummyjson} from "../models/ResponsePostsDummyjson.ts";
import {PostModel} from "../models/PostModel.ts";
import {CommentModel} from "../models/CommentModel.ts";
import {TodoModel} from "../models/TodoModel.ts";
import {ResponseTodosDummyjson} from "../models/ResponseTodosDummyjson.ts";
import {ResponseCommentsDummyjson} from "../models/ResponseCommentsDummyjson.ts";

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

const getPosts = async (): Promise<PostModel[]> => {
    const response: ResponsePostsDummyjson = await fetch(endpointPosts)
        .then(res => res.json())
    return response.posts;
}

const getTodos = async (): Promise<TodoModel[]> => {
    const response: ResponseTodosDummyjson = await fetch(endpointTodos)
        .then(res => res.json())
    return response.todos;
}

const getComments = async (): Promise<CommentModel[]> => {
    const response: ResponseCommentsDummyjson = await fetch(endpointComments)
        .then(res => res.json())
    return response.comments;
}

export {
    getPosts,
    getTodos,
    getComments
};