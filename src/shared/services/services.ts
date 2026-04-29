import { BASE_URL } from "../constants/constants.ts";
import type { Recipe, RecipesWithLikesResponse } from "../utils/types.ts";


interface IRecipesService {
    getAll(): Promise<Recipe[]>;
    getAllWithLikes(userId: number): Promise<RecipesWithLikesResponse>;
    searchRecipes(searchQuery: string): Promise<Recipe[]>;
    searchRecipesWithLikes(searchQuery: string, userId: number): Promise<RecipesWithLikesResponse>;
}

class Services implements IRecipesService {

    async getAll(): Promise<Recipe[]> {
        const response = await fetch(`${BASE_URL}/getRecipes`);

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        return await response.json();
    }

    async getAllWithLikes(userId: number): Promise<RecipesWithLikesResponse> {
        const response = await fetch(`${BASE_URL}/getRecipes/${userId}`);

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        return await response.json();
    }

    async searchRecipes(searchQuery: string): Promise<Recipe[]> {
        const response = await fetch(`${BASE_URL}/searchRecipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ searchQuery }),
        });

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        return await response.json();
    }

    async searchRecipesWithLikes(searchQuery: string, userId: number): Promise<RecipesWithLikesResponse> {
        const response = await fetch(`${BASE_URL}/searchRecipes/${userId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ searchQuery }),
        })

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        return await response.json();
    }
}

export default new Services();