import { useParams } from "react-router";
import RecipeSwitcher from "../recipe-switcher/recipe-switcher.tsx";
import { useState } from "react";
import RecipeList from "../recipe-list/recipe-list.tsx";


function UserRecipes() {
    const [recipesState, setRecipesState] = useState<"my" | "liked">("my");
    const { userId } = useParams<{ userId: string }>();
    console.log(userId);

    return (
        <section className="flex flex-col w-[80%] gap-2 items-center">
            <RecipeSwitcher recipesState={ recipesState } setRecipesState={ setRecipesState } />
            <RecipeList />
        </section>
    );
}

export default UserRecipes;