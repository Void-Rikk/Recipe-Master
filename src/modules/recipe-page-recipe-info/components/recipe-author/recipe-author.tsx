import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";


interface RecipeAuthorProps {
    id: number;
    firstName: string;
    lastName: string;
}

function RecipeAuthor({ id, firstName, lastName }: RecipeAuthorProps) {

    return (
        <section className="flex items-center gap-2">
            <CircleUserRound className="w-8 h-8"/>
            <Link
                to={`/user/${id}`}
                className="text-lg hover:underline"
            >
                { firstName } { lastName }
            </Link>
        </section>
    );
}

export default RecipeAuthor;