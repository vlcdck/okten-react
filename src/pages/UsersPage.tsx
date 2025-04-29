import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

export const UsersPage = () => {

    const {users, loadState} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userSliceActions.loadUsers())
    }, [])

    return (
        <>
            Users Page
            {!loadState && <div>Loading...</div>}
            {users.map(user => <div key={user.id}>{user.id} - {user.name}</div>)}
        </>
    );
};