import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostProps = {
    post: IPost
}

export const PostComponent: FC<PostProps> = ({post: {userId, id, title, body}}) => {
    return (
        <div>
            <h3 className={'font-medium text-3xl'}>Title - {title}</h3>
            <p>UserID - {userId}</p>
            <p>ID - {id}</p>
            <p className={'bg-orange-300'}>{body}</p>
        </div>
    );
};