import {PostModel} from "./PostModel.ts";

export interface ResponsePostsDummyjson {
    posts: PostModel[];
    total: number;
    skip: number;
    limit: number;
}