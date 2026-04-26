import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home-page/home-page.tsx";
import AuthPage from "./pages/auth-page/auth-page.tsx";
import RecipePage from "./pages/recipe-page/recipe-page.tsx";
import CreateRecipePage from "./pages/create-recipe-page/create-recipe-page.tsx";
import UserPage from "./pages/user-page/user-page.tsx";
import EditProfilePage from "./pages/edit-profile-page/edit-profile-page.tsx";


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
        path: "/user/:userId",
        element: <UserPage />
    },
    {
        path: "/user/edit/:userId",
        element: <EditProfilePage />
    },
    {
        path: "/create",
        element: <CreateRecipePage />
    },
    {
        path: "/recipe/:recipeId",
        element: <RecipePage />
    }
]);