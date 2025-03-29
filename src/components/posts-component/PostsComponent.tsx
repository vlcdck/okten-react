import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {getPosts} from "../../services/api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";



export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts().then((post) => setPosts(post))
    }, [])

    return (
        <>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </>
    );
};
