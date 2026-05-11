import Button from "../../../../shared/components/button/button.tsx";
import type { Dispatch, SetStateAction } from "react";
import { switchRecipesState } from "../../utils/utils.ts";

interface RecipeSwitcherProps {
    recipesState: "my" | "liked";
    setRecipesState: Dispatch<SetStateAction<"my" | "liked">>
}

function RecipeSwitcher({ recipesState, setRecipesState }: RecipeSwitcherProps) {

    return (
        <div className="bg-gray-100 rounded-lg">
            <Button
                className={ ("text-center m-1 p-2 text-black hover:bg-gray-100 transition-all")
                    + (recipesState === "my" ? " bg-white hover:bg-white shadow shadow-gray-400" : " bg-transparent cursor-pointer") }
                onClick={ () => switchRecipesState(recipesState, setRecipesState, "my") }
            >
                Мои рецепты
            </Button>

            <Button
                className={ ("text-center m-1 p-2 text-black hover:bg-gray-100 transition-all")
                    + (recipesState === "liked" ? " bg-white hover:bg-white shadow shadow-gray-400" : " bg-transparent cursor-pointer") }
                onClick={ () => switchRecipesState(recipesState, setRecipesState, "liked") }
            >
                Понравившиеся
            </Button>
        </div>
    );
}

export default RecipeSwitcher;