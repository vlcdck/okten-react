import {PaginationComponent} from "../components/PaginationComponent.tsx";
import {Outlet} from "react-router-dom";

export const PaginationLayout = () => {
    return (
        <div>
            <Outlet/>
            <PaginationComponent/>
        </div>
    );
};