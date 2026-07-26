import { Link } from "react-router";
import { useAppSelector } from "../../../../shared/hooks/hooks.ts";


interface UserDescriptionProps {
    userId: string | undefined;
    username: string;
    userDescription: string;
    recipesAmount: number;
}

function UserDescription({ userId, username, userDescription, recipesAmount }: UserDescriptionProps) {
    const currentUserId = useAppSelector(state => state.user.user?.id);

    if (!userId) return null;

    return (
        <div className="flex flex-col gap-2">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{ username }</h1>
                <p className="text-gray-500">{ userDescription }</p>
            </header>
            <p>{ recipesAmount } <span className="text-gray-500">рецептов</span></p>
            {
                currentUserId === Number(userId) &&
                <Link
                    to={`/user/edit/${userId}`}
                    className="bg-gray-900 p-2 rounded-lg
                    self-start shadow shadow-gray-600
                    hover:translate-y-[-1px] hover:cursor-pointer hover:shadow-md transition-all"
                >
                    <span className="text-white">Редактировать профиль</span>
                </Link>
            }
        </div>
    );
}

export default UserDescription;