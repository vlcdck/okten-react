import {IPost} from "../../models/IPost.ts";

interface PostProp {
    item: IPost;
}

export const PostComponent = ({item}: PostProp) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    );
};