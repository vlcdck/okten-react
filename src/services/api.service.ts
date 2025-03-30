import {CommentModel} from "../models/CommentModel.ts";

const endpointsComments = import.meta.env.VITE_API_BASE_URL + '/comments';

export const getComments = async (): Promise<CommentModel[]> => {
    return await fetch(endpointsComments)
        .then((response) => response.json());
}

