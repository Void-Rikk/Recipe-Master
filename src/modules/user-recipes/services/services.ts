import type { Recipe, RecipesWithLikesResponse } from "../../../shared/utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";


interface IUserRecipesService {
    getRecipesByUserId(userId: number): Promise<Recipe[]>;
    getRecipesByUserIdWithLikes(userId: number, currentUserId: number): Promise<RecipesWithLikesResponse>
    getRecipesLikedByUser(userId: number): Promise<Recipe>;
}

class UserRecipesService implements IUserRecipesService {

    async getRecipesByUserId(userId: number): Promise<Recipe[]> {
        const response = await fetch(`${BASE_URL}/getRecipesByUserId/${userId}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }

    async getRecipesByUserIdWithLikes(userId: number, currentUserId: number): Promise<RecipesWithLikesResponse> {
        const response = await fetch(`${BASE_URL}/getRecipesByUserIdWithLikes/${userId}/${currentUserId}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }

    async getRecipesLikedByUser(userId: number) {
        const response = await fetch(`${BASE_URL}/getRecipesLikedByUser/${userId}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }
}

export default new UserRecipesService();