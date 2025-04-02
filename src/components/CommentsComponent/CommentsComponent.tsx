import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICommentsDummyjson} from "../../models/ICommentsDummyjson.ts";
import {ICommentsJsonplaceholder} from "../../models/ICommentsJsonplaceholder.ts";
import {apiServices} from "../../services/api.service.ts";
import {DummyResponseType} from "../../models/DummyResponseType.ts";
import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";

export const CommentsComponent = () => {

    const location = useLocation().pathname.split('/').filter(Boolean).pop();

    const [comments, setComments] = useState<ICommentsDummyjson[] | ICommentsJsonplaceholder[]>([]);

    useEffect(() => {
        if (location == 'json') {
            apiServices.getAllJsonplaceholder<ICommentsJsonplaceholder[]>('/comments')
                .then(value => {
                    setComments(value)
                })
        } else if (location == 'dummy') {
            apiServices.getAllDummy<DummyResponseType & { comments: ICommentsDummyjson[] }>('/comments')
                .then(value => {
                    setComments(value.comments)
                })
        }
    }, [location])

    return (
        <div className={'flex items-center justify-center flex-wrap gap-5 text-center'}>
            {comments.map((comment) => <CommentComponent key={comment.id} item={comment}/>)}
        </div>
    );
};