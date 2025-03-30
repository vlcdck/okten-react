import {FC} from "react";
import {CommentModel} from "../../models/CommentModel.ts";

type CommentProp = {
    comment: CommentModel;
}

export const Comment: FC<CommentProp> = ({comment: {name, id, postId, email, body}}) => {
    return (
        <div className={'w-xl border rounded-xl p-8 text-center'}>
            <h3>Name - {name}</h3>
            <p>UserID - {id}</p>
            <p>PostID - {postId}</p>
            <p>Email = {email}</p>
            <p>{body}</p>
        </div>
    );
};