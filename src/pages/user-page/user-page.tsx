import { UserCard } from "../../modules/user-card";
import { UserRecipes } from "../../modules/user-recipes";
import { useParams } from "react-router";


function UserPage() {
    const { userId } = useParams<{ userId: string }>();

    if (!userId) {
        return null;
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 w-full
        max-md:p-0"
        >
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