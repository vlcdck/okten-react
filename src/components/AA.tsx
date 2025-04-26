import {useContext} from "react";
import {ChangeTheme} from "../context/ChangeTheme.tsx";

export const AA = () => {
    const {theme, changeTheme} = useContext(ChangeTheme)

    const handler = () => {
        if (theme === "light") {
            changeTheme('dark')
        } else {
            changeTheme('light')
        }
    };
    return (
        <div>
            <button onClick={handler}>Change theme</button>
        </div>
    );
};