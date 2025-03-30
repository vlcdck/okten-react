import {PostModel} from "../../models/PostModel.ts";

type PostProp = {
    item: PostModel;
}

export const PostComponent = ({item}: PostProp) => {
    return (
        <div>
            <div>

                <h3>Title - {item.title}</h3>
                <p>ID - {item.id} UserID - {item.userId}</p>
                <ul>Tags - {item.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))} </ul>
                <p>Views - {item.views}</p>
                <p>{item.body}</p>
                <div>
                    <p>Reactions: Like - {item.reactions.likes} Dislike - {item.reactions.dislikes}</p>
                </div>
            </div>
        </div>
    );
};