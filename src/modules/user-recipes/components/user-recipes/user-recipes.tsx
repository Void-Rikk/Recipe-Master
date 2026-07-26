import RecipeSwitcher from "../recipe-switcher/recipe-switcher.tsx";
import { useEffect, useRef, useState } from "react";
import RecipeList from "../recipe-list/recipe-list.tsx";
import { useAppSelector, useFetch, useInfiniteScroll } from "../../../../shared/hooks/hooks.ts";
import UserRecipesService from "../../services/services.ts";
import Loader from "../../../../shared/components/loader/loader.tsx";
import type { Recipe } from "../../../../shared/utils/types.ts";
import { getPortionAmount, getTotalPortions } from "../../../../shared/utils/utils.ts";


interface UserRecipesProps {
    userId: string;
}

function UserRecipes({ userId }: UserRecipesProps) {
    const [recipesState, setRecipesState] = useState<"my" | "liked">("my");
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});
    const [portionAmount] = useState<number>(getPortionAmount());
    const [portion, setPortion] = useState<number>(1);
    const [totalPortions, setTotalPortions] = useState<number>(0);

    const currentUserId = useAppSelector(state => state.user.user?.id);

    const infiniteScrollElement = useRef<HTMLDivElement>(null);

    const { fetching: fetchRecipes, isLoading, error } = useFetch(async (isExtending) => {
        if (!userId) return;

        let stablePortion = portion;

        if (!isExtending) {
            stablePortion = 1;
            setPortion(1);
        }

        if (currentUserId === Number(userId) && recipesState === "liked") {
            const [result, recipesAmount] = await UserRecipesService.getRecipesLikedByUser(Number(userId), portionAmount, stablePortion);
            setTotalPortions(getTotalPortions(recipesAmount, portionAmount));
            setRecipes(prev => isExtending ? [...prev, ...result] : result);
        }
        else {
            const [result, recipesAmount] = await UserRecipesService.getRecipesByUserId(Number(userId), currentUserId, portionAmount, stablePortion);
            setTotalPortions(getTotalPortions(recipesAmount, portionAmount));
            setRecipes(prev => isExtending ? [...prev, ...result.recipes] : result.recipes);
            setLikesMap(result.likes);
        }
    });

    useEffect(() => {
        fetchRecipes(false);
    }, [recipesState, userId]);

    useEffect(() => {
        if (portion === 1) return;
        fetchRecipes(true);
    }, [portion, portionAmount]);

    useInfiniteScroll(infiniteScrollElement, portion < totalPortions, isLoading, () => {
        setPortion(prev => prev + 1);
    });

    return (
        <section className="flex flex-col w-[80%] gap-2 items-center">
            { Number(userId) === currentUserId && <RecipeSwitcher recipesState={ recipesState } setRecipesState={ setRecipesState } /> }
            <RecipeList
                recipes={ recipes }
                likesMap={ likesMap }
                recipesState={ recipesState }
            />
            { isLoading && <Loader /> }
            { error && <span className="text-red-500">{ error.message }</span> }
            <div ref={ infiniteScrollElement } id="infiniteScrollElement"></div>
        </section>
    );
}

export default UserRecipes;