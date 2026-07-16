import Input from "../../../../shared/components/input/input.tsx";
import { type Dispatch, type SetStateAction } from "react";
import { Search } from "lucide-react";


interface SearchBarProps {
    setSearchQuery: Dispatch<SetStateAction<string>>;
    isSearching: boolean
}

function SearchBar({ setSearchQuery, isSearching }: SearchBarProps) {

    return (
        <form
            className="flex items-center gap-6 min-w-[35vw]
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
                    onChange={ (e) => setSearchQuery(e.target.value) }
                />
                <Search
                    className={`${ isSearching ? "animate-pulse text-white" : "animate-none text-gray-400" }`}
                />
            </div>
        </form>
    );
}

export default SearchBar;