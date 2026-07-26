import { Link } from "react-router";
import { CircleUserRound } from "lucide-react";


interface RecipeDescriptionProps {
    recipeID: number;
    recipeName: string;
    authorId: number;
    authorFirstName: string;
    authorLastName: string;
}

function RecipeDescription({ recipeID, recipeName, authorId, authorFirstName, authorLastName }: RecipeDescriptionProps) {

    return (
        <>
            <header
                className="text-xl hover:underline"
            >
                <Link
                    to={`/recipe/${recipeID}`}
                >
                    { recipeName }
                </Link>
            </header>
            <p>
                <Link
                    to={`/user/${authorId}`}
                    className="flex items-center gap-2 hover:cursor-pointer hover:underline"
                >
                    <CircleUserRound className="w-8 h-8" />
                    <span className="text-lg">{ authorFirstName + " " + authorLastName }</span>
                </Link>
            </p>
        </>
    );
}

export default RecipeDescription;