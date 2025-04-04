import {useEffect, useState} from "react";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {UserService} from "../../services/getDummyData.api.service.ts";
import {IUser} from "../../models/IUser.ts";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        UserService.getAllUsers()
            .then(value => setUsers(value.users))
    }, []);

    return (
        <>
            {
                users.map(user => <UserComponent user={user} key={user.id}/>)
            }
        </>
    );
};