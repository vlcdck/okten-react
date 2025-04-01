import {Outlet} from "react-router-dom";
import {SourceMenu} from "../../components/menu-components/SourceMenu.tsx";

export const PostsPage = () => {
    return (
        <div>
            <h3>Display some Posts</h3>
            <SourceMenu/>
            <Outlet/>
        </div>
    );
};