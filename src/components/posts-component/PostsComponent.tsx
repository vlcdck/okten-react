import {useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {loadAuthPosts} from "../../service/loadData.api.service.ts";
import {refreshTokens} from "../../service/refreshTokens.api.service.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        loadAuthPosts()
            .then(posts => setPosts(posts))
            .catch(() => refreshTokens()
                .then(() => loadAuthPosts()
                    .then(posts => setPosts(posts)))
            )
    })
    return (
        <div className={'flex flex-wrap items-center gap-4 w-2/3 m-auto mt-4 mb-4'}>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};