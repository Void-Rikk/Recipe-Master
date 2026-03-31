import Input from "../../../../shared/components/input/input.tsx";
import Button from "../../../../shared/components/button/button.tsx";
import { Search } from "lucide-react";
import { type SubmitEventHandler, useState } from "react";


function SearchBar() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const handleSearch: SubmitEventHandler = (e) => {
        e.preventDefault();
        if (searchQuery.length === 0) return;
    }

    return (
        <form
            className="flex items-center justify-center gap-4 w-[80%]"
            onSubmit={ (e) => handleSearch(e) }
        >
            <Input
                type="text"
                className="h-10 w-[60%] rounded-2xl text-lg shadow-sm shadow-gray-900
                focus:translate-y-[-2px] transition-all focus:shadow-lg outline-none"
                placeholder="Search for some recipe"
                value={ searchQuery }
                onChange={ (e) => setSearchQuery(e.target.value) }
            />
            <Button
                className="flex justify-center items-center p-2 min-w-8 min-h-8 rounded-full hover:translate-y-[-1px]
                hover:bg-gray-900 hover:shadow-md hover:cursor-pointer shadow-sm shadow-gray-900 transition-all"
            >
                <Search />
            </Button>
        </form>
    );
}

export default SearchBar;