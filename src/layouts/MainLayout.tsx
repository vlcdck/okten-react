import {Outlet} from "react-router-dom";
import {MainMenu} from "../components/menu/MainMenu.tsx";

export const MainLayout = () => {
    return (
        <>
            <h1>Display some Data</h1>
            <MainMenu/>
            <Outlet/>
        </>
    );
};