import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home-page/home-page.tsx";
import AuthPage from "./pages/auth-page/auth-page.tsx";
import RecipePage from "./pages/recipe-page/recipe-page.tsx";
import CreateRecipePage from "./pages/create-recipe-page/create-recipe-page.tsx";
import UserPage from "./pages/user-page/user-page.tsx";
import EditProfilePage from "./pages/edit-profile-page/edit-profile-page.tsx";
import NotFoundPage from "./pages/not-found-page/not-found-page.tsx";
import ProtectedRoute from "./shared/components/protected-route/protected-route.tsx";
import PrivateRoute from "./shared/components/private-route/private-route.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        index: true,
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
        element: <PrivateRoute><EditProfilePage /></PrivateRoute>
    },
    {
        path: "/create",
        element: <ProtectedRoute><CreateRecipePage /></ProtectedRoute>
    },
    {
        path: "/recipe/:recipeId",
        element: <RecipePage/>
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]);