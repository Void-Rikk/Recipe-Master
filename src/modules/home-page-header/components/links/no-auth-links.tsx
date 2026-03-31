import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";


function NoAuthLinks() {

    return (
        <>
            <Link
                to={"/auth"}
                className="flex items-center gap-2 text-lg hover:underline"
            >
                Sign in
                <CircleUserRound />
            </Link>
        </>
    );
}

export default NoAuthLinks;