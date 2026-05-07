import { BASE_URL } from "../constants/constants.ts";
import type { RecipesWithLikesResponse } from "../utils/types.ts";


interface IRecipesService {
    getAll(userId: number | undefined): Promise<RecipesWithLikesResponse>;
    searchRecipes(userId: number | undefined, searchQuery: string): Promise<RecipesWithLikesResponse>;
}

class Services implements IRecipesService {

    async getAll(userId: number | undefined): Promise<RecipesWithLikesResponse> {
        const queryParams = userId ? "?userId=" + userId : "";
        const response = await fetch(`${BASE_URL}/recipes${queryParams}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }

    async searchRecipes(userId: number | undefined, searchQuery: string): Promise<RecipesWithLikesResponse> {
        const response = await fetch(`${BASE_URL}/recipes/search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                searchQuery
            }),
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
}

export default new Services();