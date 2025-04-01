import './App.css'
import {MainMenuComponent} from "./components/menu-components/MainMenuComponent.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <MainMenuComponent/>
            <Outlet/>
        </>
    )
}

export default App
