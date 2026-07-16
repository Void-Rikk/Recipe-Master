import { Header } from "../../modules/home-page-header";
import { RecipeCard } from "../../modules/recipe-card";
import SearchBar from "../../modules/home-page-header/components/search-bar/search-bar.tsx";
import { ChevronUp } from "lucide-react";
import { useAppSelector, useAuth, useFetch, useInfiniteScroll } from "../../shared/hooks/hooks.ts";
import RecipesService from "../../shared/services/services.ts";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Recipe } from "../../shared/utils/types.ts";
import Loader from "../../shared/components/loader/loader.tsx";
import { debounce, getPortionAmount, getTotalPortions } from "../../shared/utils/utils.ts";


function HomePage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const isAuth = useAuth();
    const userId = useAppSelector(state => state.user.user?.id);
    const [likesMap, setLikesMap] = useState<Record<string, boolean>>({});
    const [totalPortions, setTotalPortions] = useState<number>(0);
    const [portionAmount] = useState<number>(getPortionAmount());
    const [portion, setPortion] = useState<number>(1);
    const infiniteScrollElement = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchError, setSearchError] = useState<Error | null>(null);
    const prevSearchQueryRef = useRef<string>("");

    const { fetching: fetchRecipes, isLoading, error } = useFetch(async (isExtending) => {
        const [data, totalRecipes] = await RecipesService.getAll(userId, portionAmount, portion);
        setTotalPortions(getTotalPortions(totalRecipes, portionAmount));
        setRecipes(prev => isExtending ? [...prev, ...data.recipes] : data.recipes);
        setLikesMap(data.likes);
    });

    const searchRecipes = useCallback(debounce(async (isExtending, searchQuery) => {
        setIsSearching(true);
        setSearchError(null);
        if (!isExtending) {
            setPortion(1);
        }
        try {
            const [data, totalRecipes] = await RecipesService.searchRecipes(userId, searchQuery as string, portionAmount, portion);
            setTotalPortions(getTotalPortions(totalRecipes, portionAmount));
            setRecipes(prev => isExtending ? [...prev, ...data.recipes] : data.recipes);
            setLikesMap(data.likes);
        }
        catch (e) {
            if (e instanceof Error) {
                setSearchError(e);
            }
        }
        finally {
            setIsSearching(false);
        }

        prevSearchQueryRef.current = searchQuery as string;
    }, 1000), [userId, portionAmount, portion]);

    useEffect(() => {
        let isExtending: boolean;
        if (searchQuery) {
            isExtending = searchQuery === prevSearchQueryRef.current;
            searchRecipes(isExtending, searchQuery);
        }
        else {
            isExtending = prevSearchQueryRef.current === "";
            fetchRecipes(isExtending);
            prevSearchQueryRef.current = "";
        }
    }, [isAuth, portion, searchQuery]);

    useInfiniteScroll(infiniteScrollElement, portion < totalPortions, isLoading || isSearching, () => {
        setPortion(prev => prev + 1);
    });

    return (
        <div className="relative flex flex-col items-center gap-8 p-2 w-full">
            <Header />
            <main className="flex flex-col items-center gap-4 w-full max-md:w-[95%] min-h-fit">
                <SearchBar
                    setSearchQuery={ setSearchQuery }
                    isSearching={ isSearching }
                />
                <section className={ `flex flex-wrap gap-4 w-[80%] max-md:w-full h-fit` }>
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
                    { (error || searchError) && <h2 className="w-full text-center text-xl text-red-500 pt-10">{ error?.message || searchError?.message }</h2> }
                </section>
                { (isLoading || isSearching) && <Loader className="border-10 w-30 h-30 mt-10" /> }
                <div ref={ infiniteScrollElement } id="infiniteScrollElement"></div>
            </main>
            <a
                className="
                fixed bottom-10 right-10
                bg-gray-100 p-2 rounded-full
                shadow shadow-gray-200
                border border-gray-400
                hover:cursor-pointer"
                onClick={ () => window.scrollTo({top: 0, behavior: "smooth"}) }
            >
                <ChevronUp />
            </a>
        </div>
    );
}

export default HomePage;