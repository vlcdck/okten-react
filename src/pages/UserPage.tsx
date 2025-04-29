import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector";
import {userSliceActions} from "../redux/slices/userSlice/userSlice";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

export const UserPage = () => {
    const {id} = useParams();

    const {user, loadState} = useAppSelector(({userSlice}) => userSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(userSliceActions.loadUser(id));
    }, [id])
    return (
        <>
            User Page
            {!loadState && <div>Loading...</div>}
            {user && <div key={user.id}>{user.id} - {user.name}</div>}
        </>
    );
};