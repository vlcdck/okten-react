import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropType = {
    user: IUser;
}

export const UserComponent: FC<UserPropType> = ({user}: UserPropType) => {
    return (
        <div className={'text-center w-2xs h-60 border-2'}>
            <h3>{user.id} - {user.username}</h3>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};