import {CommentModel} from "./CommentModel.ts";

export interface ResponseCommentsDummyjson {
    comments: CommentModel[];
    total: number;
    skip: number;
    limit: number;
}

