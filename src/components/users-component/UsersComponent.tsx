import {useAppSelector} from "../../redux/hooks/useAppSelector";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {PreloaderComponent} from "../preloaders/PreloaderComponent.tsx";

export const UsersComponent = () => {
    const {users, usersLoadState} = useAppSelector(({userStoreSlice}) => userStoreSlice);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [])
    return (
        <div className={'m-auto w-4/5'}>
            <div className={'flex m-0'}>{!usersLoadState && <PreloaderComponent/>}</div>
            <div className={'flex flex-wrap gap-4'}>
                {
                    users.map(user => <UserComponent key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};