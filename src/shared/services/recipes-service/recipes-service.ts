import { BASE_URL } from "../../constants/constants.ts";
import type { Recipe } from "../../utils/types.ts";

type RecipesWithLikesResponse = {
    recipes: Recipe[],
    likes: Record<string, boolean>
}

interface IRecipesService {
    getAll(): Promise<Recipe[]>;
    getAllWithLikes(userId: number): Promise<RecipesWithLikesResponse>
}

class RecipesService implements IRecipesService {

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
}

export default new RecipesService();