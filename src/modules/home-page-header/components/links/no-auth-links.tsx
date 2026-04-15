import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";


function NoAuthLinks() {

    return (
        <>
            <Link
                to={"/auth"}
                className="flex items-center gap-2 text-lg hover:underline"
            >
                <CircleUserRound
                    className="w-8 h-8
                    max-md:w-10 max-md:h-10"
                />
                Sign in
            </Link>
        </>
    );
}

export default NoAuthLinks;