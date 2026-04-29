import { useParams } from "react-router";
import UserAvatar from "../user-avatar/user-avatar.tsx";
import UserDescription from "../user-description/user-description.tsx";
import { useFetch } from "../../../../shared/hooks/hooks.ts";
import UserService from "../../services/services.ts";
import { useEffect, useState } from "react";
import type { User } from "../../../../shared/utils/types.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import UserPlaceHolder from "../../../../../Sample_User_Icon.png";


function UserCard() {
    const { userId } = useParams<{ userId: string }>();

    const [userData, setUserData] = useState<User | null>(null);

    const { fetching: fetchUserInfo, isLoading, error } = useFetch(async () => {
        if (!userId) return;

        const userInfo = await UserService.getUserInfo(Number(userId));
        setUserData(userInfo);
    });

    useEffect(() => {
        fetchUserInfo();
    }, []);

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className="flex gap-8 p-6 w-[50%]
        border border-gray-300 rounded-xl
        shadow-md shadow-gray-300
        max-md:w-full max-md:rounded-none"
        >
            { error && <span className="text-red-500">{ error.message }</span> }
            {
                userData &&
                <>
                    <UserAvatar
                        src={ (userData.avatar_id && userData.avatar_extension)
                            ? userData.avatar_id + userData.avatar_extension
                            : UserPlaceHolder }
                        alt={ userData.first_name + " " + userData.last_name }
                    />
                    <UserDescription
                        userId={ userId }
                        username={ userData.first_name + " " + userData.last_name }
                        userDescription={ userData.bio || "" }
                        recipesAmount={ 12 }
                    />
                </>
            }
        </section>
    );
}

export default UserCard;