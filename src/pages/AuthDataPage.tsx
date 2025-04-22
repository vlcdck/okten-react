import {ChooseDataMenuComponent} from "../components/choose-data-menu/ChooseDataMenuComponent.tsx";
import {Outlet} from "react-router-dom";

export const AuthDataPage = () => {
    return (
        <>
            <ChooseDataMenuComponent/>
            <Outlet/>
        </>
    );
};