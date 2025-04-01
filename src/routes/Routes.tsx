import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";
import {ProductsPage} from "../pages/products-page/ProductsPage.tsx";
import {
    UsersFromJsonplaceholderComponent
} from "../components/users-jsonplaceholder-component/UsersFromJsonplaceholderComponent.tsx";
import {UsersFromDummyjsonComponent} from "../components/users-dummyjson-component/UsersFromDummyjsonComponent.tsx";
import {PostsFromDummyjsonComponent} from "../components/posts-dummyjson-component/PostsFromDummyjsonComponent.tsx";
import {
    PostsFromJsonplaceholderComponent
} from "../components/posts-jsonpalceholder-component/PostsFromJsonplaceholderComponent.tsx";
import {
    CommentsFromJsonplaceholderComponent
} from "../components/comments-jsonplaceholder-component/CommentsFromJsonplaceholderComponent.tsx";
import {
    CommentsFromDummyjsonComponent
} from "../components/comments-dummyjson-component/CommentsFromDummyjsonComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: 'jsonplaceholder', element: <UsersFromJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <UsersFromDummyjsonComponent/>}
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'jsonplaceholder', element: <PostsFromJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <PostsFromDummyjsonComponent/>}
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'jsonplaceholder', element: <CommentsFromJsonplaceholderComponent/>},
                    {path: 'dummyjson', element: <CommentsFromDummyjsonComponent/>}
                ]
            },
            {path: 'products', element: <ProductsPage/>}
        ]
    }
])