import { UserCard } from "../../modules/user-card";
import { UserRecipes } from "../../modules/user-recipes";


function UserPage() {

    return (
        <div className="flex flex-col items-center gap-4 p-4
        max-md:p-0"
        >
            <UserCard />
            <UserRecipes />
        </div>
    );
}

export default UserPage;