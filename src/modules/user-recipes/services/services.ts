import type { Recipe, RecipesWithLikesResponse } from "../../../shared/utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";
import { constructQueryParams } from "../../../shared/utils/utils.ts";


interface IUserRecipesService {
    getRecipesByUserId(userId: number, currentUserId: number | undefined, limit: number, portion: number): Promise<[RecipesWithLikesResponse, number]>;
    getRecipesLikedByUser(userId: number, limit: number, portion: number): Promise<[Recipe[], number]>;
}

class UserRecipesService implements IUserRecipesService {

    async getRecipesByUserId(userId: number, currentUserId: number | undefined, limit: number, portion: number): Promise<[RecipesWithLikesResponse, number]> {
        const queryParams = constructQueryParams({ ...(currentUserId ? { currentUserId } : {}), limit, portion });
        const response = await fetch(`${BASE_URL}/recipes/user/${userId}${queryParams}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const recipesAmount = response.headers.get("X-Total-Recipes");

        return [await response.json(), recipesAmount ? +recipesAmount : 0] as const;
    }

    async getRecipesLikedByUser(userId: number, limit: number, portion: number): Promise<[Recipe[], number]> {
        const queryParams = constructQueryParams({ limit, portion });

        const response = await fetch(`${BASE_URL}/recipes/user/${userId}/liked${queryParams}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const recipesAmount = response.headers.get("X-Total-Recipes");

        return [await response.json(), recipesAmount ? +recipesAmount : 0] as const;
    }
}

export default new UserRecipesService();