import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {PreloaderComponent} from "../components/preloaders/PreloaderComponent.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userActions} from "../redux/slices/UserSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {UserComponent} from "../components/user-component/UserComponent.tsx";
import {CommentComponent} from "../components/comment-component/CommentComponent.tsx";
import {PostComponent} from "../components/post-component/PostComponent.tsx";

export const FullDataPage = () => {

    const {
        userStoreSlice: {users, usersLoadState},
        commentStoreSlice: {comments, commentsLoadState},
        postStoreSlice: {posts, postsLoadState}
    } = useAppSelector(state => state)

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!users.length) {
            dispatch(userActions.loadUsers())
        }
        if (!comments.length) {
            dispatch(commentActions.loadComments())
        }
        if (!posts.length) {
            dispatch(postActions.loadPosts())
        }
    }, [])

    return (
        <div className={'flex flex-col gap-4 m-auto w-4/5'}>
            <div>
                {!usersLoadState && <PreloaderComponent/>}
                <div className={'flex flex-wrap gap-4'}>
                    {users.map(user => <UserComponent key={user.id} user={user}/>)}
                </div>
            </div>
            <br/>
            <div>
                {!postsLoadState && <PreloaderComponent/>}
                <div className={'flex flex-wrap gap-4'}>
                    {posts.map(post => <PostComponent key={post.id} post={post}/>)}
                </div>
            </div>
            <br/>
            <div>
                {!commentsLoadState && <PreloaderComponent/>}
                <div className={'flex flex-wrap gap-4'}>
                    {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
                </div>
            </div>
        </div>
    );
};