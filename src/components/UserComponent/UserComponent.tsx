import {IUserDummyjson} from "../../models/IUserDummyjson.ts";
import {IUserJsonplaceholder} from "../../models/IUserJsonplaceholder.ts";

type UserProps = {
    item: IUserDummyjson | IUserJsonplaceholder;
}

export const UserComponent = ({item}: UserProps) => {
    return (
        <div className={'border-2 rounded-2xl p-2 w-xs h-60 overflow-hidden'}>
            <h3>{item.username}</h3>
            <p>{item.email}</p>
            <p>{item.phone}</p>
        </div>
    );
};