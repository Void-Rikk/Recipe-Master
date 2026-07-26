import { BASE_URL } from "../../../shared/constants/constants.ts";
import type { TrieNode } from "../utils/types.ts";

interface IAutoCompleteService {
    get(): Promise<TrieNode>
}

export class AutocompleteService implements IAutoCompleteService {

    async get(): Promise<TrieNode> {
        const response = await fetch(`${BASE_URL}/recipes/autocomplete`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
}

export default new AutocompleteService();