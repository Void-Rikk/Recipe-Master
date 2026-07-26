import { BASE_URL } from "../constants/constants.ts";
import type { RecipesWithLikesResponse } from "../utils/types.ts";
import { constructQueryParams } from "../utils/utils.ts";


interface IRecipesService {
    getAll(userId: number | undefined, limit: number, portion: number): Promise<[RecipesWithLikesResponse, number]>;
    searchRecipes(userId: number | undefined, searchQuery: string, limit: number, portion: number): Promise<[RecipesWithLikesResponse, number]>;
}

class Services implements IRecipesService {

    async getAll(userId: number | undefined, limit: number, portion: number): Promise<[RecipesWithLikesResponse, number]> {
        const queryParams = constructQueryParams({ ...(userId ? { userId } : {}), limit, portion });
        const response = await fetch(`${BASE_URL}/recipes${queryParams}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const totalRecipes = response.headers.get("x-total-recipes");

        return [await response.json(),  totalRecipes ? +totalRecipes : 0] as const;
    }

    async searchRecipes(userId: number | undefined, searchQuery: string, limit: number, portion: number): Promise<[RecipesWithLikesResponse, number]> {
        const queryParams = constructQueryParams({ limit, portion });

        const response = await fetch(`${BASE_URL}/recipes/search${ queryParams }`, {
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

        const totalRecipes = response.headers.get('x-total-recipes');

        return [await response.json(), totalRecipes ? +totalRecipes : 0] as const;
    }
}

export default new Services();