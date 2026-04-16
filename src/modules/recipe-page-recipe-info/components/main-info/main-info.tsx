import RecipeHeader from "../recipe-header/recipe-header.tsx";
import RecipeDescription from "../recipe-description/recipe-description.tsx";
import RecipeIngredients from "../recipe-ingredients/recipe-ingredients.tsx";
import RecipeInstructions from "../recipe-instructions/recipe-instructions.tsx";
import RecipeAuthor from "../recipe-author/recipe-author.tsx";
import RecipeLikes from "../recipe-likes/recipe-likes.tsx";


function MainInfo() {

    return (
        <main className="flex flex-col gap-4 pl-[5%]">
            <RecipeHeader />
            <RecipeDescription />
            <RecipeIngredients />
            <RecipeInstructions />
            <RecipeAuthor />
            <RecipeLikes />
        </main>
    );
}

export default MainInfo;