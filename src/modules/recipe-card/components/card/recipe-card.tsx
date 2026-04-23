import Pic from "../../../../../napoleon-test-image.png"; // placeholder
import LikeButton from "../like-button/like-button.tsx";
import RecipeDescription from "../recipe-description/recipe-description.tsx";


interface CardProps {
    recipeID: number;
    recipeName: string;
    likes: number;
    isLiked: boolean;
    authorId: number;
    authorFirstName: string;
    authorLastName: string;
}

function RecipeCard({ recipeID, recipeName, authorId, authorFirstName, authorLastName, likes, isLiked }: CardProps) {

    return (
        <div
            className="grid grid-cols-1 grid-rows-[60%_1fr_10%] gap-2 items-center justify-center p-6
            shadow-md shadow-gray-300
            hover:shadow-lg hover:border-gray-400 transition-all
            w-[30%] aspect-square rounded-lg border border-gray-300
            max-md:w-[100%] max-lg:w-[45%]"
        >
            <img
                src={ Pic }
                alt={ recipeName + " picture" }
                className="w-[100%] h-[100%] rounded-md"
            />
            <div className="flex flex-col gap-2 self-start">
                <RecipeDescription
                    recipeID={ recipeID }
                    recipeName={ recipeName }
                    authorId={ authorId }
                    authorFirstName={ authorFirstName }
                    authorLastName={ authorLastName }
                />
            </div>
            <p className="justify-self-end">
                <LikeButton
                    recipeId={ recipeID }
                    likes={ likes }
                    isLiked={ isLiked }
                />
            </p>
        </div>
    );
}

export default RecipeCard;