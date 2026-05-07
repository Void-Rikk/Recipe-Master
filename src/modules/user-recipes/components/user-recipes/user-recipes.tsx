import RecipeSwitcher from "../recipe-switcher/recipe-switcher.tsx";
import { useEffect, useState } from "react";
import RecipeList from "../recipe-list/recipe-list.tsx";
import { useAppSelector, useFetch } from "../../../../shared/hooks/hooks.ts";
import UserRecipesService from "../../services/services.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import type { Recipe } from "../../../../shared/utils/types.ts";


interface UserRecipesProps {
    userId: string;
}

function UserRecipes({ userId }: UserRecipesProps) {
    const [recipesState, setRecipesState] = useState<"my" | "liked">("my");
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});
    const currentUserId = useAppSelector(state => state.user.user?.id);

    const { fetching: fetchRecipes, isLoading, error } = useFetch(async () => {
        if (!userId) return;

        let result;
        if (currentUserId === Number(userId) && recipesState === "liked") {
            result = await UserRecipesService.getRecipesLikedByUser(Number(userId));
            setRecipes(result);
        }
        else {
            result = await UserRecipesService.getRecipesByUserId(Number(userId), currentUserId);
            setRecipes(result.recipes);
            setLikesMap(result.likes);
        }
    });

    useEffect(() => {
        fetchRecipes();
    }, [recipesState, userId]);

    return (
        <section className="flex flex-col w-[80%] gap-2 items-center">
            { Number(userId) === currentUserId && <RecipeSwitcher recipesState={ recipesState } setRecipesState={ setRecipesState } /> }
            { isLoading && <Loader /> }
            { error && <span className="text-red-500">{ error.message }</span> }
            <RecipeList
                recipes={ recipes }
                likesMap={ likesMap }
                recipesState={ recipesState }
            />
        </section>
    );
}

export default UserRecipes;