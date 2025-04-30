import { Outlet } from "react-router-dom";
import {MainMenu} from "../components/menues/main-menu/MainMenu.tsx";

export const MainLayout = () => {
    return (
        <>
            <MainMenu/>
            <Outlet/>
        </>
    );
};