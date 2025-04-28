import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link to="users">Users</Link>
            </li>
            <li>
                <Link to="users/1">User 1</Link>
            </li>
            <li>
                <Link to="/posts">Posts</Link>
            </li>
        </ul>
    );
};