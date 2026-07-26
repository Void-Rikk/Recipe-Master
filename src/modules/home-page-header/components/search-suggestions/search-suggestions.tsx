

interface SearchSuggestionsProps {
    suggestions: string[];
    isOpen: boolean;
    onSelect: (word: string) => void;
    limit?: number
}

function SearchSuggestions({ suggestions, isOpen, onSelect, limit=10 }: SearchSuggestionsProps) {

    if (!isOpen || suggestions.length === 0) return null

    return (
        <div className="absolute w-full h-10 bg-gray-900 z-0 rounded-2xl">
            <div
                className={ `${ isOpen ? "" : "hidden" }
                        first:pt-10 h-fit
                        shadow-md shadow-gray-900
                        opacity-0 animate-opacity
                        bg-gray-900 rounded-2xl text-white` }
            >
                {
                    suggestions.map((word, index) => {
                        if (index + 1 > limit) return null;

                        return (
                            <p
                                key={ word }
                                onMouseDown={() => {
                                    onSelect(word);
                                }}
                                className="p-2 pl-4 text-lg
                                    rounded-2xl transition-all
                                    hover:bg-black hover:cursor-pointer"
                            >
                                { word }
                            </p>
                        );
                    })
                }
            </div>
        </div>
    );
}

export { SearchSuggestions };