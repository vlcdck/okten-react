import {Link} from "react-router-dom";

export const MainMenu = () => {
    return (
        <ul>
            <li>
                <Link to='/cars'>Show Cars</Link>
            </li>
            <li>
                <Link to='/cars/create'>Create Car</Link>
            </li>
        </ul>
    );
};