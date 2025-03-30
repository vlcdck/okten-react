import {useEffect, useState} from "react";
import {CommentModel} from "../../models/CommentModel.ts";
import {getComments} from "../../service/api.service.ts";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {

    const [comments, setComments] = useState<CommentModel[]>([])

    useEffect(() => {
        getComments()
            .then((comments) => setComments(comments))
    }, []);

    return (
        <>
            {
                comments.map((comment) => <CommentComponent key={comment.id} item={comment} />)
            }
        </>
    );
};