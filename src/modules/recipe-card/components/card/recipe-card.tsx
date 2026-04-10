import Pic from "../../../../../napoleon-test-image.png"; // placeholder
import LikeButton from "../like-button/like-button.tsx";
import type { Author } from "../../../../shared/utils/types.ts";
import RecipeDescription from "../recipe-description/recipe-description.tsx";


interface CardProps {
    recipeID: string;
    recipeName: string
    author: Author;
    likes: number;
    isLiked: boolean
}

function RecipeCard({ recipeID, recipeName, author, likes, isLiked }: CardProps) {

    return (
        <div
            className="grid grid-cols-1 grid-rows-[60%_1fr_10%] gap-2 items-center justify-center p-6
            shadow-md shadow-gray-300
            hover:shadow-lg hover:border-gray-400 transition-all
            w-80 h-70 rounded-lg border border-gray-300"
        >
            <img src={ Pic } alt={ recipeName + " picture" } className="w-[100%] h-[100%] rounded-md" />
            <div className="flex flex-col gap-1 self-start">
                <RecipeDescription recipeID={ recipeID } recipeName={ recipeName } author={ author } />
                <p className="self-end">
                    <LikeButton likes={ likes } isLiked={ isLiked } />
                </p>
            </div>
        </div>
    );
}

export default RecipeCard;