import {MainMenuComponent} from "../components/main-menu/MainMenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <MainMenuComponent/>
            <Outlet/>
        </>
    );
};