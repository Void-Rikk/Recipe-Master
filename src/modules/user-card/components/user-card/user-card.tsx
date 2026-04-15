import { useParams } from "react-router";
import UserAvatar from "../user-avatar/user-avatar.tsx";
import UserDescription from "../user-description/user-description.tsx";
import UserPlaceholder from "../../../../../Sample_User_Icon.png";


function UserCard() {
    const { userId } = useParams<{ userId: string }>();
    console.log(userId);

    return (
        <section className="flex gap-8 p-6 w-[50%]
        border border-gray-300 rounded-xl
        shadow-md shadow-gray-300
        max-md:w-full max-md:rounded-none"
        >
            <UserAvatar src={ UserPlaceholder } alt={ "JJ" } />
            <UserDescription
                username={ "John Johnson" }
                userDescription={ "Sharing simple and tasty recipes" }
                recipesAmount={ 12 }
                followersAmount={ 340 }
                followingAmount={ 180 }
            />
        </section>
    );
}

export default UserCard;