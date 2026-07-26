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
        const response = await fetch(`${BASE_URL}/recipes/${recipeId}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
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
        const response = await fetch(`${BASE_URL}/like/${userId}/${recipeId}`);

        return response.json();
    }
}

export const ExactLikeStateServ = new ExactLikeStateService();
export const ExactRecipeServ = new ExactRecipeService();