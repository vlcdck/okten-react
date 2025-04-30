import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import {PreloaderComponent} from "../preloaders/PreloaderComponent.tsx";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {

    const {comments, commentsLoadState} = useAppSelector(({commentStoreSlice}) => commentStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(commentActions.loadComments());
    }, [])
    return (
        <div className={'m-auto w-4/5'}>
            <div className={'flex m-0'}>{!commentsLoadState && <PreloaderComponent/>}</div>
            <div className={'flex flex-wrap gap-4'}>
                {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};