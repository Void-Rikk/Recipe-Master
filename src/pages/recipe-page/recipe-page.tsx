import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { RecipeInfo } from "../../modules/recipe-page-recipe-info";
import { CommentSection } from "../../modules/comment-section";


function RecipePage() {

    return (
        <div
            className="flex flex-col gap-4 w-[60%] rounded-md
            mt-2 mb-2 p-4 shadow-[1px_1px_5px_1px] shadow-gray-300 relative
            max-md:w-full max-md:mt-0 max-md:rounded-none max-md:shadow-none"
        >
            <Link
                to="/"
                className="flex items-center gap-1"
            >
                <ChevronLeft />
                <span>Home</span>
            </Link>
            <RecipeInfo />
            <CommentSection />
        </div>
    );
}

export default RecipePage;