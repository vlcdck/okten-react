import {SourceMenu} from "../components/menus-components/SourceMenu.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <SourceMenu/>
            <Outlet/>
        </>
    );
};