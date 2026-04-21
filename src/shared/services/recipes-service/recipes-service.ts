import { BASE_URL } from "../../constants/constants.ts";
import type { Recipe } from "../../utils/types.ts";


interface IRecipesService {
    getAll(): Promise<Recipe[]>;
    getAllWithLikes(userId: number): Promise<Recipe[]>
}

class RecipesService implements IRecipesService {

    async getAll(): Promise<Recipe[]> {
        const response = await fetch(`${BASE_URL}/getRecipes`);

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        return await response.json();
    }

    async getAllWithLikes(userId: number) {

    }
}

export default new RecipesService();