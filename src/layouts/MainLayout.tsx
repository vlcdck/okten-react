import {Outlet} from "react-router-dom";
import {MainMenu} from "../components/menus/main-menu/MainMenu.tsx";

export const MainLayout = () => {
    return (
        <div>
            Main Layout
            <MainMenu/>
            <Outlet/>
        </div>
    );
};