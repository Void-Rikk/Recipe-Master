import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "../../../../shared/components/dropdown/dropdown.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { CircleUserRound, LogOut, User } from "lucide-react";
import { Link } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../../shared/hooks/hooks.ts";
import { clearUser } from "../../../../shared/stores/slices/user-slice.ts";


function UserDropdownMenu() {
    const user = useAppSelector(state => state.user.user);
    const dispatch = useAppDispatch();

    const handleLogOut = () => {
        dispatch(clearUser());
        localStorage.removeItem("user");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="flex items-center gap-2 text-lg
                    border border-transparent rounded-full p-2
                    shadow shadow-transparent bg-white text-gray-900
                    hover:border-gray-400 hover:shadow-gray-200 hover:cursor-pointer transition-all"
                    aria-label="Choose action"
                >
                    <CircleUserRound className="max-md:w-10 max-md:h-10" />
                    <span className="max-md:hidden">{ user ? `${user.first_name} ${user.last_name}` : "" }</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="flex flex-col gap-1
                transition-all bg-white rounded-md p-2
                shadow-md shadow-gray-600
                border border-gray-400"
            >
                <DropdownMenuItem asChild>
                    <Link
                        to={ `/user/${ user ? user.id : -1}` }
                        className="flex items-center gap-2
                        rounded-md p-1
                        hover:outline-none hover:bg-gray-200 transition-all"
                        aria-label="User profile link"
                    >
                        <User
                            className="w-6 h-6"
                        />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Button
                        className="flex items-center gap-2
                        bg-white text-gray-900 py-0 px-0 p-1 rounded-md
                        hover:bg-gray-200 hover:cursor-pointer transition-all"
                        onClick={ handleLogOut }
                    >
                        <LogOut
                            className="w-6 h-6"
                        />
                        <span>Log Out</span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserDropdownMenu;