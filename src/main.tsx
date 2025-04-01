import {createRoot} from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.tsx";
import {UserPage} from "./pages/UserPage/UserPage.tsx";
import {PostsPage} from "./pages/PostsPage/PostsPage.tsx";
import {CommentsPage} from "./pages/CommentsPage/CommentsPage.tsx";
import {ProductsPage} from "./pages/ProductsPage/ProductsPage.tsx";

createRoot(document.getElementById('root')!)
    .render(<BrowserRouter>
        <Routes>
            <Route path={'/'} element=<App/>>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'products'} element={<ProductsPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>)
