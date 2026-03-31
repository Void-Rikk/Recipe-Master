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
                className="flex items-center gap-2 text-lg hover:underline"
            >
                <SquarePlus />
                Create Recipe
            </Link>
            <Link
                to={ `/user/${userID}` }
                className="flex items-center gap-2 text-lg hover:underline"
            >
                { username }
                <CircleUserRound />
            </Link>
        </>
    );
}

export default OnAuthLinks;