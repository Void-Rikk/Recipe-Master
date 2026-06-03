import { Navigate, Outlet, useParams } from "react-router";
import { useAppSelector } from "../../hooks/hooks.ts";
import type { ReactNode } from "react";


interface PrivateRouteProps {
    redirectPath?: string;
    children?: ReactNode;
}

function PrivateRoute({ redirectPath = "/", children }: PrivateRouteProps) {
    const { userId: authorId } = useParams<{ userId: string }>();
    const currentUserId = useAppSelector(state => state.user.user?.id);

    if (Number(authorId) !== currentUserId) {
        return <Navigate to={ redirectPath } replace />
    }

    return children ? children : <Outlet />
}

export default PrivateRoute;