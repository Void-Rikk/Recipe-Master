import { RecipeCard } from "../../../recipe-card";
import type { Recipe } from "../../../../shared/utils/types.ts";


interface RecipeListProps {
    recipesState: "my" | "liked";
    recipes: Recipe[];
    likesMap: Record<string, boolean>;
}

function RecipeList({ recipes, likesMap, recipesState="my" }: RecipeListProps) {

    return (
        <div className="flex flex-wrap justify-center gap-4 w-full">
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