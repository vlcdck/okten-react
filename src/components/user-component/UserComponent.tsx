import {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

export const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div> {user.id} {user.username}</div>
    );
};