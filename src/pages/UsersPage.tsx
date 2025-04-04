import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersComponent/>
        </div>
    );
};