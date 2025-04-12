import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsers} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(value => {
            setUsers(value.users);
        });
    }, [searchParams]);
    return (
        <div>
            {users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)}
        </div>
    );
};