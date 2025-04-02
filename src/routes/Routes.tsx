import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {PostsPage} from "../pages/PostsPage.tsx";
import {CommentsPage} from "../pages/CommentsPage.tsx";
import {UsersComponent} from "../components/UsersComponent/UsersComponent.tsx";
import {PostsComponent} from "../components/PostsComponent/PostsComponent.tsx";
import {CommentsComponent} from "../components/CommentsComponent/CommentsComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {
                path: 'users', element: <UsersPage/>, children: [
                    {path: 'json', element: <UsersComponent/>},
                    {path: 'dummy', element: <UsersComponent/>}
                ]
            },
            {
                path: 'posts', element: <PostsPage/>, children: [
                    {path: 'json', element: <PostsComponent/>},
                    {path: 'dummy', element: <PostsComponent/>}
                ]
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {path: 'json', element: <CommentsComponent/>},
                    {path: 'dummy', element: <CommentsComponent/>}
                ]
            },
        ]
    }
])