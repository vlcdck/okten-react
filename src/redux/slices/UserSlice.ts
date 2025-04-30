import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, isFulfilled, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";

type UserSliceType = {
    users: IUser[],
    usersLoadState: boolean;
}

const initialUserSliceState: UserSliceType = {users: [], usersLoadState: false};

const loadUsers = createAsyncThunk('userSlice/loadUsers', async (_, thunkAPI) => {
    const users = await getAll<IUser[]>('/users');
    return thunkAPI.fulfillWithValue(users);
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialUserSliceState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
        })
            .addMatcher(isFulfilled(loadUsers), state => {
                state.usersLoadState = true;
            })
});

export const userActions = {...userSlice.actions, loadUsers};