import {useAppSelector, userSliceActions} from "../main.tsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

export const UsersPage = () => {

    const {userSlice: {users}} = useAppSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data =>
                dispatch(userSliceActions.loadUsers(data))
            )
    })

    return (
        <>
            Users Page
            {
                users.map(user => <div key={user.id}>{user.id} - {user.name}</div>)
            }
        </>
    );
};