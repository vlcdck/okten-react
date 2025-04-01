import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/Users/UsersPage.tsx";
import {PostsPage} from "../pages/Posts/PostsPage.tsx";
import {CommentsPage} from "../pages/Comments/CommentsPage.tsx";
import {ProductsPage} from "../pages/Products/ProductsPage.tsx";

export const routes = createBrowserRouter(
    [
        {
            path:'/', element:<App/>, children:[
                {path: 'users', element:<UsersPage/>},
                {path: 'posts', element:<PostsPage/>},
                {path: 'comments', element: <CommentsPage/>},
                {path: 'products', element: <ProductsPage/>}
            ]
        }
    ]
)