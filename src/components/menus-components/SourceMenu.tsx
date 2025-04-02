import {Link} from "react-router-dom";

export const SourceMenu = () => {
    return (
        <ul className={'flex justify-evenly items-center'}>
            <li>
                <Link to="json" className={'border-2'}>From Jsonplaceholder</Link>
            </li>
            <li>
                <Link to="dummy" className={'border-2'}>From Dummyjson</Link>
            </li>
        </ul>
    );
};