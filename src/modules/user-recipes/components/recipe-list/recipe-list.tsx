import { RecipeCard } from "../../../recipe-card";
import type { Recipe } from "../../../../shared/utils/types.ts";
import { useEffect, useState } from "react";
import { useFetch } from "../../../../shared/hooks/hooks.ts";
import UserRecipesService from "../../services/services.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";


interface RecipeListProps {
    userId: number;
    currentUserId?: number;
    recipesState: "my" | "liked";
}

function RecipeList({ userId, currentUserId, recipesState="my" }: RecipeListProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});

    const { fetching: fetchRecipes, isLoading, error } = useFetch(async () => {
        if (!userId) return;

        let result;
        if (currentUserId && recipesState === "my") {
            result = await UserRecipesService.getRecipesByUserIdWithLikes(userId, currentUserId);
            setRecipes(result.recipes);
            setLikesMap(result.likes);
        }
        else if (currentUserId === userId && recipesState === "liked") {
            result = await UserRecipesService.getRecipesLikedByUser(userId);
            setRecipes(result);
        }
        else {
            result = await UserRecipesService.getRecipesByUserId(userId);
            setRecipes(result);
        }
    });

    useEffect(() => {
        fetchRecipes();
    }, [recipesState]);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            { isLoading && <Loader /> }
            { error && <span className="text-red-500">{ error.message }</span> }
            {
                recipes.map(recipe => (
                    <RecipeCard
                        key={ recipe.id }
                        recipeID={ recipe.id }
                        recipeName={ recipe.name }
                        likes={ recipe.likes_count }
                        isLiked={ recipesState === "liked" ? true : likesMap[recipe.id] !== undefined ? true : false }
                        authorId={ recipe.user_id }
                        authorFirstName={ recipe.first_name }
                        authorLastName={ recipe.last_name }
                        imageId={ recipe.image_id }
                        image_extension={ recipe.image_extension }
                    />
            ))}
        </div>
    );
}

export default RecipeList;