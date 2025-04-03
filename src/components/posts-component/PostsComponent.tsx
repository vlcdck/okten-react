import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {DummyResponse} from "../../models/DummyResponse.ts";
import {getData} from "../../service/getData.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getData<DummyResponse & { posts: IPost[] }>('/posts')
            .then(value => setPosts(value.posts));
    });

    return (
        <div>
            {
                posts.map((post => <PostComponent key={post.id} item={post}/>))
            }
        </div>
    );
};