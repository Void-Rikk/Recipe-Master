import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home-page/home-page.tsx";
import AuthPage from "./pages/auth-page/auth-page.tsx";
import RecipePage from "./pages/recipe-page/recipe-page.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/auth",
        element: <AuthPage />
    },
    {
        path: "/user/:id",
        element: null
    },
    {
        path: "/user/edit/:userId",
        element: null
    },
    {
        path: "/create",
        element: null
    },
    {
        path: "/recipe/:recipeId",
        element: <RecipePage />
    }
]);