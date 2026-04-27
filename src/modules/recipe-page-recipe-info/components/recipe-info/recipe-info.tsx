import RecipeImageSection from "../recipe-image-section/recipe-image-section.tsx";
import MainInfo from "../main-info/main-info.tsx";
import { useFetch } from "../../../../shared/hooks/hooks.ts";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Recipe } from "../../../../shared/utils/types.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import type { Ingredient, Instruction } from "../../utils/types.ts";
import { ExactRecipeServ } from "../../services/services.ts";


function RecipeInfo() {
    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState<Recipe | null>();
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [instructions, setInstructions] = useState<Instruction[]>([]);

    const { fetching: fetchRecipe, isLoading, error } = useFetch(async () => {
        const data = await ExactRecipeServ.getRecipeById(Number(recipeId));

        setRecipe(data.recipe);
        setIngredients(data.ingredients);
        setInstructions(data.instructions);
    });

    useEffect(() => {
        fetchRecipe();
    }, []);

    return (
        <>
            { isLoading && <Loader className="m-auto mt-10 w-20 h-20 border-10" /> }
            { error && <h1>{ error.message }</h1> }
            { recipe &&
                <>
                    <RecipeImageSection
                        imageId={ recipe.image_id }
                        image_extension={ recipe.image_extension }
                    />
                    <MainInfo
                        header={ recipe.name }
                        description={ recipe.description }
                        ingredients={ ingredients }
                        instructions={ instructions }
                        authorId={ recipe.user_id }
                        authorFirstName={ recipe.first_name }
                        authorLastName={ recipe.last_name }
                        likesCount={ recipe.likes_count }
                    />
                </>
            }
        </>
    );
}

export default RecipeInfo;