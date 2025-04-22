import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostProp = {
    post: IPost;
}

export const PostComponent:FC<PostProp> = ({post}) => {
    return (
        <div className={'flex flex-col items-center border-2 rounded-2xl h-96 w-96 p-2.5'}>
            <h3 className={'text-xl pb-1 text-center'}>{post.id} - {post.title}</h3>
            <p className={'text-center'}>{post.body}</p>
        </div>
    );
};