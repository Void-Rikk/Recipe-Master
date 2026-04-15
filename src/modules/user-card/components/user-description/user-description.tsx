import { Link } from "react-router";


interface UserDescriptionProps {
    userId: string | undefined;
    username: string;
    userDescription: string;
    recipesAmount: number;
    followersAmount: number;
    followingAmount: number;
}

function UserDescription({ userId, username, userDescription, recipesAmount, followersAmount, followingAmount }: UserDescriptionProps) {

    if (!userId) return null;

    return (
        <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{ username }</h1>
                <p className="text-gray-500">{ userDescription }</p>
            </header>
            <ul className="flex gap-4">
                <li>{ recipesAmount } <span className="text-gray-500">recipes</span></li>
                <li>{ followersAmount } <span className="text-gray-500">followers</span></li>
                <li>{ followingAmount } <span className="text-gray-500">following</span></li>
            </ul>
            <Link
                to={`/user/edit/${userId}`}
                className="bg-gray-900 p-2 rounded-lg
                self-start shadow shadow-gray-600
                hover:translate-y-[-1px] hover:cursor-pointer hover:shadow-md transition-all"
            >
                <span className="text-white">Edit Profile</span>
            </Link>
        </div>
    );
}

export default UserDescription;