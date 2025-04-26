import './App.css'
import {A} from "./components/A.tsx";
import {B} from "./components/B.tsx";
import {ChangeTheme} from "./context/ChangeTheme.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light')
    
    return (
        <>
            <ChangeTheme.Provider value={{
                theme: themeColor,
                changeTheme: (theme) => {
                    setThemeColor(theme);
                }
            }}>
                <A/>
                <B/>
            </ChangeTheme.Provider>
        </>
    )
}

export default App
