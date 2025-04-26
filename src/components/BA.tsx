import {useContext} from "react";
import {ChangeTheme} from "../context/ChangeTheme.tsx";
import './BA.css'
export const BA = () => {
    const {theme} = useContext(ChangeTheme)

    return (
        <div className={theme}>
            <p>component ba color is - {theme}</p>
        </div>
    );
};