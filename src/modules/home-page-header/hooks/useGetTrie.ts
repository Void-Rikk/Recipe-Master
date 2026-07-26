import { useFetch } from "../../../shared/hooks/hooks.ts";
import AutocompleteService from "../services/autocomplete-service.ts";
import { useEffect, useState } from "react";
import { Trie } from "../utils/trie.ts";

export const useGetTrie = () => {
    const [trie, setTrie] = useState<Trie | null>(null);

    const { fetching: loadAutocomplete, isLoading, error } = useFetch(async () => {
        const trie = new Trie(await AutocompleteService.get());
        setTrie(trie);
    });

    useEffect(() => {
        loadAutocomplete();
    }, []);

    return { trie, isLoading, error };
};