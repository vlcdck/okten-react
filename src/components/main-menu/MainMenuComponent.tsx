import {Link} from "react-router-dom";

export const MainMenuComponent = () => {
    return (
        <ul className={'flex justify-evenly items-center h-12 mt-3'}>
            <li className={'block bg-gray-300 w-20 h-10 text-center p-2 rounded-xl'}>
                <Link to='/'>Home</Link>
            </li>
            <li className={'block bg-gray-300 w-20 h-10 text-center p-2 rounded-xl'}>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    );
};