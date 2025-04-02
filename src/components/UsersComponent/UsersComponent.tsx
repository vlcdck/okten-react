import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {apiServices} from "../../services/api.service.ts";
import {IUserJsonplaceholder} from "../../models/IUserJsonplaceholder.ts";
import {IUserDummyjson} from "../../models/IUserDummyjson.ts";
import {DummyResponseType} from "../../models/DummyResponseType.ts";
import {UserComponent} from "../UserComponent/UserComponent.tsx";

export const UsersComponent = () => {

    const location = useLocation().pathname.split("/").filter(Boolean).pop();

    const [users, setUsers] = useState<IUserDummyjson[] | IUserJsonplaceholder[]>([])

    useEffect(() => {
        if (location == 'json') {
            apiServices.getAllJsonplaceholder<IUserJsonplaceholder[]>('/users')
                .then(value => setUsers(value));
        } else if (location == 'dummy') {
            apiServices.getAllDummy<DummyResponseType & { users: IUserDummyjson[] }>('/users')
                .then(value => setUsers(value.users));
        } else {
            new Error('Invalid location');
        }
    }, [location])

    return (
        <div className={'flex items-center justify-center flex-wrap gap-5 text-center'}>
            {users.map((user) => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};