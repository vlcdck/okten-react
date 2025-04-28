import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/router.tsx";
import {Provider, useSelector} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {IUser} from "./models/IUser.ts";

type UserSliceType = {
    users: IUser[];
}

const initialState: UserSliceType = {users: []}
const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        loadUsers: (state, action) => {
            state.users = action.payload;
        }
    },
})

const store = configureStore({
        reducer: {
            userSlice: userSlice.reducer,
            // postSlice: postSlice.reducer,
        }
    }
)

export const userSliceActions = {
    ...userSlice.actions,
}

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <RouterProvider router={routes}/>
    </Provider>
)
