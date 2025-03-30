import {CommentModel} from "../../models/CommentModel.ts";

type CommentProp = {
    item: CommentModel;
}

export const CommentComponent = ({item}:CommentProp) => {
    return (
        <div>
            <div>
                <h3>User - {item.user.fullName}</h3>
                <p>userID - {item.user.id}</p>
            </div>
            <div>
                <p>Comment - {item.body}</p>
                <p>Likes - {item.likes}</p>
            </div>
        </div>
    );
};