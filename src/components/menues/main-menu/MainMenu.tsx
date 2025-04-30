import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link to={'users'}>Users</Link>
            </li>
            <li>
                <Link to={'posts'}>Posts</Link>
            </li>
            <li>
                <Link to={'comments'}>Comments</Link>
            </li>
            <li>
                <Link to={'complex'}>Full Data</Link>
            </li>
        </ul>
    );
};