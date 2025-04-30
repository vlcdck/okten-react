import {IComment} from "../../models/IComment.ts";
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type CommentSliceType = {
    comments: IComment[],
    commentsLoadState: boolean;
}

const initialCommentSliceState: CommentSliceType = {comments: [], commentsLoadState: false};

const loadComments = createAsyncThunk('commentSlice/loadComments', async (_, thunkAPI) => {
    const comments = await getAll<IComment[]>('/comments')
    return thunkAPI.fulfillWithValue(comments)
})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: initialCommentSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadComments.fulfilled, (state, action) => {
            state.comments = action.payload;
        })
            .addMatcher(isFulfilled(loadComments), state => {
                state.commentsLoadState = true;
            })
})

export const commentActions = {...commentSlice.actions, loadComments};