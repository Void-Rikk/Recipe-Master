import { Header } from "../../modules/home-page-header";
import { RecipeCard } from "../../modules/recipe-card";
import SearchBar from "../../modules/home-page-header/components/search-bar/search-bar.tsx";
import { ChevronUp } from "lucide-react";
import { useAppSelector, useAuth, useFetch } from "../../shared/hooks/hooks.ts";
import RecipesService from "../../shared/services/recipes-service/recipes-service.ts";
import { useEffect, useState } from "react";
import type { Recipe } from "../../shared/utils/types.ts";
import Loader from "../../shared/components/loader/loader.tsx";


function HomePage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const isAuth = useAuth();
    const userId = useAppSelector(state => state.user.user?.id);
    const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});

    const { fetching: fetchRecipes, isLoading, error } = useFetch(async () => {
        if (isAuth) {
            const data = await RecipesService.getAllWithLikes(userId!);
            setRecipes(data.recipes);
            setLikesMap(data.likes);
        }
        else {
            const data = await RecipesService.getAll();
            setRecipes(data);
            setLikesMap({});
        }
    });

    useEffect(() => {
        fetchRecipes();
    }, [isAuth]);

    return (
        <div className="relative flex flex-col items-center gap-8 p-2">
            <Header />
            <main className="flex flex-col items-center gap-4 w-[80%] max-md:w-[95%]"
            >
                <SearchBar setRecipes={ setRecipes } userId={ userId } setLikesMap={ setLikesMap } />
                <section className="flex flex-wrap gap-4">
                    { isLoading && <Loader className="border-10 w-30 h-30 mt-10" /> }
                    { error && <h2 className="text-xl text-red-500 pt-10">{ error.message }</h2> }
                    { recipes.map(recipe => (
                        <RecipeCard
                            key={ recipe.id }
                            recipeID={ recipe.id }
                            recipeName={ recipe.name }
                            authorId={ recipe.user_id }
                            authorFirstName={ recipe.first_name }
                            authorLastName={ recipe.last_name }
                            likes={ recipe.likes_count }
                            imageId={ recipe.image_id }
                            image_extension={ recipe.image_extension }
                            isLiked={ likesMap[recipe.id] !== undefined ? true : false }
                        />
                    )) }
                </section>
            </main>
            <a
                className="
                fixed bottom-10 right-10
                bg-orange-100 p-2 rounded-full
                shadow shadow-orange-200
                border border-orange-300
                hover:cursor-pointer"
                onClick={ () => window.scrollTo({top: 0, behavior: "smooth"}) }
            >
                <ChevronUp />
            </a>
        </div>
    );
}

export default HomePage;