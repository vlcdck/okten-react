import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getData} from "../../service/getData.ts";
import {DummyResponse} from "../../models/DummyResponse.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getData<DummyResponse & {users: IUser[]}>('/users')
            .then(value => setUsers(value.users));
    }, [users]);

    return (
        <div>
            {
                users.map((user => <UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
};