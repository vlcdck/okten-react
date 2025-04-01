import {Outlet} from "react-router-dom";
import {SourceMenu} from "../../components/menu-components/SourceMenu.tsx";

export const UsersPage = () => {
    return (
        <div>
            <h3>Display some Users</h3>
            <SourceMenu/>
            <Outlet/>
        </div>
    );
};