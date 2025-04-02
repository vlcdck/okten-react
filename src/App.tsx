import './App.css'
import {MainMenu} from "./components/menus-components/MainMenu.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div>
            <MainMenu/>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default App
