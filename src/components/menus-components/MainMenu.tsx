import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <ul className={'flex justify-evenly items-center'}>
            <li >
                <Link to='/users' className={'border-2'}>Show Users</Link>
            </li>
            <li>
                <Link to='/posts' className={'border-2'}>Show Posts</Link>
            </li>
            <li>
                <Link to='/comments' className={'border-2'}>Show Comments</Link>
            </li>
        </ul>
    );
};