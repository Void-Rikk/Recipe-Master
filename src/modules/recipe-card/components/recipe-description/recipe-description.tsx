import { Link } from "react-router";
import { CircleUserRound } from "lucide-react";
import type { Author } from "../../../../shared/utils/types.ts";


interface RecipeDescriptionProps {
    recipeID: string,
    recipeName: string,
    author: Author,
}

function RecipeDescription({ recipeID, recipeName, author }: RecipeDescriptionProps) {

    return (
        <>
            <header
                className="text-lg hover:underline"
            >
                <Link
                    to={`/recipe/${recipeID}`}
                >
                    { recipeName }
                </Link>
            </header>
            <p>
                <Link
                    to={`/user/${author.id}`}
                    className="flex gap-2 hover:cursor-pointer hover:underline"
                >
                    <CircleUserRound />
                    { author.firstname + " " + author.lastname }
                </Link>
            </p>
        </>
    );
}

export default RecipeDescription;