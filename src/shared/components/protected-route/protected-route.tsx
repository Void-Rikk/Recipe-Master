import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../hooks/hooks.ts";
import type { ReactNode } from "react";


interface ProtectedRouteProps {
    redirectPath?: string;
    children?: ReactNode;
}

function ProtectedRoute({ redirectPath = "/", children }: ProtectedRouteProps) {
    const isAuth = useAuth();

    if (!isAuth) {
        return <Navigate to={ redirectPath } replace />
    }

    return children ? children : <Outlet />;
}

export default ProtectedRoute;