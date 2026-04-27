import type {Ingredient} from "../../utils/types.ts";


interface RecipeIngredientsProps {
    ingredients: Ingredient[];
}

function RecipeIngredients({ ingredients } :RecipeIngredientsProps) {

    return (
        <section className="flex flex-col gap-1">
            <h3 className="text-xl">
                Ingredients
            </h3>
            <ul className="list-disc list-inside">
                {
                    ingredients.map(ingredient => (
                        <li
                            key={ ingredient.id }
                        >
                            { ingredient.description }
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

export default RecipeIngredients;