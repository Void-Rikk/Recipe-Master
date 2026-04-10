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
            >
                <SquarePlus />
                Create Recipe
            </Link>
            <Link
                to={ `/user/${userID}` }
                className="flex items-center gap-2 text-lg
                border border-transparent rounded-full p-2
                shadow shadow-transparent
                hover:border-gray-400 hover:shadow-gray-200 transition-all"
            >
                { username }
                <CircleUserRound />
            </Link>
        </>
    );
}

export default OnAuthLinks;