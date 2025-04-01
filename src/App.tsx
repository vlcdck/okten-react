import './App.css'
import {Menu} from "./components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div>
            <Menu/>
            App
            <Outlet/>
        </div>
    )
}

export default App
