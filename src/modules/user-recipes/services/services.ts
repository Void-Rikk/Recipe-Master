import type { Recipe, RecipesWithLikesResponse } from "../../../shared/utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";
import { constructQueryParams } from "../../../shared/utils/utils.ts";


interface IUserRecipesService {
    getRecipesByUserId(userId: number, currentUserId: number | undefined): Promise<RecipesWithLikesResponse>;
    getRecipesLikedByUser(userId: number): Promise<Recipe[]>;
}

class UserRecipesService implements IUserRecipesService {

    async getRecipesByUserId(userId: number, currentUserId: number | undefined): Promise<RecipesWithLikesResponse> {
        const queryParams = constructQueryParams({ ...(currentUserId ? { currentUserId } : {}) });
        const response = await fetch(`${BASE_URL}/recipes/user/${userId}${queryParams}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }

    async getRecipesLikedByUser(userId: number): Promise<Recipe[]> {
        const response = await fetch(`${BASE_URL}/recipes/user/${userId}/liked`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
}

export default new UserRecipesService();