import {MainMenu} from "../../components/menues/MainMenu.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <MainMenu/>
            <Outlet/>
        </>
    );
};