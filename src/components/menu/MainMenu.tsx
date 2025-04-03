import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link to='/users'>Show Users</Link>
            </li>
            <li>
                <Link to='/posts'>Show Posts</Link>
            </li>
        </ul>
    );
};