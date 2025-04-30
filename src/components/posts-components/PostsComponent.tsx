import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {useAppSelector} from "../../redux/hooks/useAppSelector";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice";
import {PreloaderComponent} from "../preloaders/PreloaderComponent.tsx";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {

    const {posts, postsLoadState} = useAppSelector(({postStoreSlice}) => postStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [])
    return (
        <div className={'m-auto w-4/5'}>
            <div className={'flex m-0'}>{!postsLoadState && <PreloaderComponent/>}</div>
            <div className={'flex flex-wrap gap-4'}>
                {posts.map(post => <PostComponent key={post.id} post={post}/>)}
            </div>
        </div>
    );
};