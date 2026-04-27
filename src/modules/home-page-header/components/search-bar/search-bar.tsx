import Input from "../../../../shared/components/input/input.tsx";
import { type Dispatch, type SetStateAction, useState } from "react";
import type { Recipe } from "../../../../shared/utils/types.ts";
import { debounce } from "../../../../shared/utils/utils.ts";
import RecipesService from "../../../../shared/services/services.ts";
import { Search } from "lucide-react";


interface SearchBarProps {
    setRecipes: Dispatch<SetStateAction<Recipe[]>>;
    setLikesMap: Dispatch<SetStateAction<Record<string, boolean>>>
    userId: number | undefined;
}

type SearchHandler = (searchQuery: string) => Promise<void>;

function SearchBar({ setRecipes, userId, setLikesMap }: SearchBarProps) {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const handleSearch = debounce<SearchHandler>(async (searchQuery: string) => {
        setIsSearching(true);
        if (!userId) {
            const recipes = await RecipesService.searchRecipes(searchQuery);
            setRecipes(recipes);
            setIsSearching(false);
        }
        else {
            const data = await RecipesService.searchRecipesWithLikes(searchQuery, userId);
            setRecipes(data.recipes);
            setLikesMap(data.likes);
            setIsSearching(false);
        }
    }, 1000);

    return (
        <form
            className="flex items-center gap-6 min-w-[50%]
            max-md:w-[100%]"
        >
            <div
                className="flex justify-between items-center pr-4
                bg-gray-900 w-full rounded-2xl
                shadow-sm shadow-gray-400
                has-[input:focus]:translate-y-[-1px] has-[input:focus]:shadow-md transition-all"
            >
                <Input
                    type="text"
                    className="h-10 w-[90%] grow-1 rounded-2xl text-lg
                    outline-none"
                    placeholder="Поиск по названию"
                    onChange={ (e) => handleSearch(e.target.value) }
                />
                <Search
                    className={`${ isSearching ? "animate-pulse text-white" : "animate-none text-gray-400" }`}
                />
            </div>
        </form>
    );
}

export default SearchBar;