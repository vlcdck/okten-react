import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserProp = {
    user: IUser;
}

export const UserComponent: FC<UserProp> = ({user}) => {

    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(`/users/${user.id}/carts`);
    }

    return (
        <div>
            <h3>{user.username}</h3>
            <button className={'border-2 cursor-pointer'} onClick={onButtonClick}>cart</button>
        </div>
    );
};