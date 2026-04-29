import RecipeSwitcher from "../recipe-switcher/recipe-switcher.tsx";
import { useState } from "react";
import RecipeList from "../recipe-list/recipe-list.tsx";
import { useAppSelector } from "../../../../shared/hooks/hooks.ts";
import { useParams } from "react-router";


function UserRecipes() {
    const [recipesState, setRecipesState] = useState<"my" | "liked">("my");
    const currentUserId = useAppSelector(state => state.user.user?.id);
    const { userId } = useParams();

    return (
        <section className="flex flex-col w-[80%] gap-2 items-center">
            { Number(userId) === currentUserId && <RecipeSwitcher recipesState={ recipesState } setRecipesState={ setRecipesState } /> }
            <RecipeList
                userId={ Number(userId) }
                currentUserId={ currentUserId }
                recipesState={ recipesState }
            />
        </section>
    );
}

export default UserRecipes;