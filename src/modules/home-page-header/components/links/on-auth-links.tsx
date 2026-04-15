import { Link } from "react-router";
import { CircleUserRound, SquarePlus } from "lucide-react";


interface OnAuthLinksProps {
    username: string;
    userID: string;
}

function OnAuthLinks({ username, userID }: OnAuthLinksProps) {

    return (
        <>
            <Link
                to={ "/create" }
                className="flex items-center gap-2 text-lg
                border border-transparent rounded-full p-2
                shadow shadow-transparent
                hover:border-gray-400 hover:shadow-gray-200 transition-all"
                aria-label="Create recipe link"
            >
                <SquarePlus className="max-md:w-10 max-md:h-10" />
                <span className="max-md:hidden">Create Recipe</span>
            </Link>
            <Link
                to={ `/user/${userID}` }
                className="flex items-center gap-2 text-lg
                border border-transparent rounded-full p-2
                shadow shadow-transparent
                hover:border-gray-400 hover:shadow-gray-200 transition-all"
                aria-label="User profile link"
            >
                <CircleUserRound className="max-md:w-10 max-md:h-10" />
                <span className="max-md:hidden">{ username }</span>
            </Link>
        </>
    );
}

export default OnAuthLinks;