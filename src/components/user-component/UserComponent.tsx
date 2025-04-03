import {IUser} from "../../models/IUser.ts";

interface UserProp {
    item: IUser;
}

export const UserComponent = ({item}: UserProp) => {
    return (
        <div>
            <h3>Username - {item.username}</h3>
            <h3>Full Name - {item.firstName} {item.maidenName} {item.lastName}</h3>
            <p>{item.age}y.o Birthday - {item.birthDate}</p>
            <p>{item.gender}</p>
            <img src={item.image} alt={item.username}/>
        </div>
    );
};