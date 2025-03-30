import {useEffect, useState} from "react";
import {getComments} from "../../services/api.service.ts";
import {Comment} from "../comment/Comment.tsx";
import {CommentModel} from "../../models/CommentModel.ts";

export const Comments = () => {

    const [comments, setComments] = useState<CommentModel[]>([])

    useEffect(() => {
        getComments()
            .then(comments => setComments(comments))
    }, [])

    return (
        <div className={'flex justify-center align-middle gap-10 flex-wrap'}>
            {
                comments.map((comment) => (<Comment key={comment.id} comment={comment}/>))
            }
        </div>
    );
};