import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link to='/users'>Users</Link>
            </li>
        </ul>
    );
};