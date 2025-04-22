import {Link} from "react-router-dom";

export const ChooseDataMenuComponent = () => {
    return (
        <ul className={'flex justify-evenly items-center h-12 mt-3'}>
            <li className={'block bg-amber-400 w-32 h-10 text-center p-2 rounded-xl'}>
                <Link to={'products'}>Products</Link>
            </li>
            <li className={'block bg-amber-400 w-32 h-10 text-center p-2 rounded-xl'}>
                <Link to={'posts'}>Posts</Link>
            </li>
        </ul>
    );
};