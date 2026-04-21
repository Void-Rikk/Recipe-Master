import { Link } from "react-router";
import { CircleUserRound, SquarePlus } from "lucide-react";
import { useAppSelector } from "../../../../shared/hooks/hooks.ts";


function OnAuthLinks() {
    const user = useAppSelector(state => state.user.user);

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
                to={ `/user/${user ? user.id : -1}` }
                className="flex items-center gap-2 text-lg
                border border-transparent rounded-full p-2
                shadow shadow-transparent
                hover:border-gray-400 hover:shadow-gray-200 transition-all"
                aria-label="User profile link"
            >
                <CircleUserRound className="max-md:w-10 max-md:h-10" />
                <span className="max-md:hidden">{ user ? `${user.first_name} ${user.last_name}` : "" }</span>
            </Link>
        </>
    );
}

export default OnAuthLinks;