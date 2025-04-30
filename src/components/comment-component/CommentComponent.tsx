import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type CommentPropType = {
    comment: IComment
}

export const CommentComponent: FC<CommentPropType> = ({comment}: CommentPropType) => {
    return (
        <div className={'text-center w-2xs h-60 border-2'}>
            <h3>{comment.id} {comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};