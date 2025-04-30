import {FC} from "react";
import {IPost} from "../../models/IPost";

type PostPropType = {
    post: IPost;
}

export const PostComponent: FC<PostPropType> = ({post}: PostPropType) => {
    return (
        <div className={'text-center w-2xs h-60 border-2'}>
            <h3>{post.id} {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};