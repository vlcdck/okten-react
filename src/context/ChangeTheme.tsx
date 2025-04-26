import {createContext} from "react";

type ChangeSchemeType = {
    theme: string,
    changeTheme: (theme: string) => void
}

export const defaultValues: ChangeSchemeType = {
    theme: "light",
    changeTheme: (theme: string) => {
        console.log(theme)
    }
};
export const ChangeTheme = createContext<ChangeSchemeType>(defaultValues);