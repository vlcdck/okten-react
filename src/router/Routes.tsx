import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/main-layout/MainLayout.tsx";
import {CarsPage} from "../pages/CarsPage.tsx";
import {CreateCarPage} from "../pages/CreateCarPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>}
        ]
    }
])