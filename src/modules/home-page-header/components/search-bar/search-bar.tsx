import Input from "../../../../shared/components/input/input.tsx";
import { type Dispatch, type SetStateAction, useCallback, useState } from "react";
import { Search } from "lucide-react";
import { SearchSuggestions } from "../search-suggestions";
import { useGetTrie } from "../../hooks";


interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    isSearching: boolean
}

function SearchBar({ searchQuery, setSearchQuery, isSearching }: SearchBarProps) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { trie } = useGetTrie();

    const handleSelect = (word: string) => {
        setSearchQuery(word);
        setIsOpen(false);
    };

    const handleFocus = useCallback(() => setIsOpen(true), []);

    const handleBlur = useCallback(() => setIsOpen(false), []);

    return (
        <form
            className="flex items-center gap-6 min-w-[35vw]
            max-md:w-[100%]"
        >
            <div
                className="relative
                flex justify-between items-center pr-4
                shadow-sm shadow-gray-400
                bg-gray-900 w-full rounded-2xl
                transition-all"
            >
                <Input
                    type="text"
                    className="h-10 w-[90%] grow-1 rounded-2xl text-lg z-1
                    outline-none"
                    placeholder="Поиск по названию"
                    onFocus={ handleFocus }
                    onBlur={ handleBlur }
                    value={ searchQuery }
                    onChange={ (e) => setSearchQuery(e.target.value) }
                />
                <Search
                    className={`z-1
                    ${ isSearching
                        ? "animate-pulse text-white"
                        : "animate-none text-gray-400" 
                    }`}
                />
                <SearchSuggestions
                    suggestions={ trie ? trie.getStrings(searchQuery) : [] }
                    isOpen={ isOpen }
                    onSelect={ handleSelect }
                    limit={ 5 }
                />
            </div>
        </form>
    );
}

export default SearchBar;