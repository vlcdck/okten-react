import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {IPostDummyjson} from "../../models/IPostDummyjson.ts";
import {IPostJsonplaceholder} from "../../models/IPostJsonplaceholder.ts";
import {apiServices} from "../../services/api.service.ts";
import {DummyResponseType} from "../../models/DummyResponseType.ts";
import {PostComponent} from "../PostComponent/PostComponent.tsx";

export const PostsComponent = () => {

    const location = useLocation().pathname.split('/').filter(Boolean).pop();

    const [posts, setPosts] = useState<IPostDummyjson[] | IPostJsonplaceholder[]>([]);

    useEffect(() => {
        if (location == 'json'){
            apiServices.getAllJsonplaceholder<IPostJsonplaceholder[]>('/posts')
                .then(value => setPosts(value));
        } else if (location == 'dummy'){
            apiServices.getAllDummy<DummyResponseType & {posts: IPostDummyjson[]}>('/posts')
                .then(value => setPosts(value.posts));
        }else{
            new Error('Invalid location');
        }
    }, [location]);

    return (
        <div className={'flex items-center justify-center flex-wrap gap-5 text-center'}>
            {posts.map((post) => <PostComponent key={post.id} item={post}/>)}
        </div>
    );
};