import type { Recipe } from "../../../shared/utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";
import type { Ingredient, Instruction } from "../utils/types.ts";

type ExactRecipeResponse = {
    recipe: Recipe;
    ingredients: Ingredient[];
    instructions: Instruction[];
}

interface IExactRecipeService {
    getRecipeById(recipeId: number): Promise<ExactRecipeResponse>;
}

class ExactRecipeService implements IExactRecipeService {

    async getRecipeById(recipeId: number): Promise<ExactRecipeResponse> {
        const response = await fetch(`${BASE_URL}/getRecipe/${recipeId}`);

        if (response.status === 400) {
            throw new Error(response.statusText);
        }

        if (response.status === 404) {
            throw new Error(response.statusText);
        }

        if (!response.ok) {
            throw new Error("Unknown error");
        }

        return await response.json();
    }
}

type ExactLikeStateResponse = {
    state: boolean;
}

interface IExactLikeStateService {
    getExactLikeState(recipeId: number, userId: number): Promise<ExactLikeStateResponse>;
}

class ExactLikeStateService implements IExactLikeStateService {
    async getExactLikeState(recipeId: number, userId: number): Promise<ExactLikeStateResponse> {
        const response = await fetch(`${BASE_URL}/getLikeState/${userId}/${recipeId}`);

        return await response.json();
    }
}

export const ExactLikeStateServ = new ExactLikeStateService();
export const ExactRecipeServ = new ExactRecipeService();