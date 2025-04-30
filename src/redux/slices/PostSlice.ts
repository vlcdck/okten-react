import {IPost} from "../../models/IPost.ts";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type PostSliceType = {
    posts: IPost[],
    postsLoadState: boolean;
}

const initialPostSliceState: PostSliceType = {posts: [], postsLoadState: false};

const loadPosts = createAsyncThunk('postSlice/loadPosts', async (_, thunkAPI) => {
    const posts = await getAll<IPost[]>('/posts');
    return thunkAPI.fulfillWithValue(posts);
})

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initialPostSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        })
            .addMatcher(isFulfilled(loadPosts), state => {
                state.postsLoadState = true;
            })
});

export const postActions = {...postSlice.actions, loadPosts};