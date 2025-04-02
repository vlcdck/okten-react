import {ICommentsDummyjson} from "../../models/ICommentsDummyjson.ts";
import {ICommentsJsonplaceholder} from "../../models/ICommentsJsonplaceholder.ts";

type CommentProp = {
    item:ICommentsDummyjson | ICommentsJsonplaceholder;
}

export const CommentComponent = ({item}:CommentProp) => {
    return (
        <div className={'border-2 rounded-2xl p-2 w-xs h-60 overflow-hidden'}>
            <h3>{item.id}</h3>
            <p>{item.body}</p>
        </div>
    );
};