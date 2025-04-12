import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: 'list', element: <PaginationLayout/>, children: [
                    {path: 'users', element: <UsersPage/>}
                ]
            }
        ]
    }
])