import { Link } from "react-router";
import { SquarePlus } from "lucide-react";
import UserDropdownMenu from "../user-dropdown-menu/user-dropdown-menu.tsx";


function OnAuthLinks() {

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

            <UserDropdownMenu />
        </>
    );
}

export default OnAuthLinks;