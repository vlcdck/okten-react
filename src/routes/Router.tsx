import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {MainPage} from "../pages/MainPage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthDataPage} from "../pages/AuthDataPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <MainPage/>},
            {path: 'login', element: <LoginPage/>},
            {
                path: 'auth', element: <AuthDataPage/>, children: [
                    {path: 'products', element: <ProductsPage/>},
                    {path: 'posts', element: <PostsPage/>},
                ]
            }
        ]
    },
])