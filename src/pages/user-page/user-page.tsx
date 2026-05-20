import { UserCard } from "../../modules/user-card";
import { UserRecipes } from "../../modules/user-recipes";
import { Link, useParams } from "react-router";
import { MoveLeft } from "lucide-react";


function UserPage() {
    const { userId } = useParams<{ userId: string }>();

    if (!userId) {
        return null;
    }

    return (
        <div className="flex flex-col items-center gap-4 p-2 w-full
        max-md:p-0"
        >
            <Link
                to="/"
                className="flex gap-2 self-start pt-2 pl-2 hover:cursor-pointer"
            >
                <MoveLeft />
                На главную
            </Link>
            <UserCard
                userId={ userId }
            />
            <UserRecipes
                userId={ userId }
            />
        </div>
    );
}

export default UserPage;