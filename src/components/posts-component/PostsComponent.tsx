import {useEffect, useState} from "react";
import {PostModel} from "../../models/PostModel.ts";
import {getPosts} from "../../service/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
        getPosts()
            .then(posts => setPosts(posts))
    }, []);

    return (
        <div>
            {posts.map((post) => <PostComponent item={post} key={post.id} />)}
        </div>
    );
};