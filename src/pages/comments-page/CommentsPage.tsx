import {Outlet} from "react-router-dom";
import {SourceMenu} from "../../components/menu-components/SourceMenu.tsx";

export const CommentsPage = () => {
    return (
        <div>
            <h3>Display some Comments</h3>
            <SourceMenu/>
            <Outlet/>
        </div>
    );
};