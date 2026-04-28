import type { RecipeComment } from "../utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";


interface IRecipeCommentService {
    getAll(recipeId: number): Promise<RecipeComment[]>;
    upload(recipeId: number, userId: number, content: string): Promise<{ id: number }>;
}

class RecipeCommentService implements IRecipeCommentService{
    async getAll(recipeId: number): Promise<RecipeComment[]> {
        const response = await fetch(`${BASE_URL}/getComments/${recipeId}`);

        if (response.status === 400) {
            throw new Error(response.statusText);
        }

        if (!response.ok) {
            throw new Error("Unknown error");
        }

        return await response.json();
    }

    async upload(recipeId: number, userId: number, content: string): Promise<{ id: number }> {
        const response = await fetch(`${BASE_URL}/uploadComment/${recipeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId,
                content
            }),
        });

        if (response.status === 400) {
            throw new Error(response.statusText);
        }

        if (!response.ok) {
            throw new Error("Unknown error");
        }

        return await response.json();
    }
}

export const RecipeCommentServ = new RecipeCommentService();