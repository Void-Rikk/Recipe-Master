import RecipeHeader from "../recipe-header/recipe-header.tsx";
import RecipeDescription from "../recipe-description/recipe-description.tsx";
import RecipeIngredients from "../recipe-ingredients/recipe-ingredients.tsx";
import RecipeInstructions from "../recipe-instructions/recipe-instructions.tsx";
import RecipeAuthor from "../recipe-author/recipe-author.tsx";
import RecipeLikes from "../recipe-likes/recipe-likes.tsx";
import type { Ingredient, Instruction } from "../../utils/types.ts";


interface MainInfoProps {
    header: string;
    description: string;
    ingredients: Ingredient[];
    instructions: Instruction[];
    authorId: number;
    authorFirstName: string;
    authorLastName: string;
    likesCount: number;
}

function MainInfo({ header, description, ingredients, instructions, authorId, authorFirstName, authorLastName, likesCount }: MainInfoProps) {

    return (
        <main className="flex flex-col gap-4 pl-[5%]">
            <RecipeHeader
                header={ header }
            />
            <RecipeDescription
                description={ description }
            />
            <RecipeIngredients
                ingredients={ ingredients }
            />
            <RecipeInstructions
                instructions={ instructions }
            />
            <RecipeAuthor
                id={ authorId }
                firstName={ authorFirstName }
                lastName={ authorLastName }
            />
            <RecipeLikes
                likesCount={ likesCount }
            />
        </main>
    );
}

export default MainInfo;