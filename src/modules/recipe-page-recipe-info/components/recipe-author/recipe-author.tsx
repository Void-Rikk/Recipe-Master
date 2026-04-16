import { CircleUserRound } from "lucide-react";
import { Link } from "react-router";


function RecipeAuthor() {

    return (
        <section className="flex items-center gap-2">
            <CircleUserRound className="w-8 h-8"/>
            <Link
                to="/"
                className="text-lg hover:underline"
            >
                John Johnson
            </Link>
        </section>
    );
}

export default RecipeAuthor;