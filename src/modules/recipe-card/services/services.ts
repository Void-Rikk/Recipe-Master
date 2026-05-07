import { BASE_URL } from "../../../shared/constants/constants.ts";


type LikeResponse = {
    recipe_id: number,
    user_id: number,
    likeState: boolean,
}

interface ILikeService {
    like(recipeId: number, userId: number, likeState: boolean): Promise<LikeResponse>;
}

class LikeService implements ILikeService {

    async like(recipeId: number, userId: number, likeState: boolean): Promise<LikeResponse> {
        const response = await fetch(`${BASE_URL}/like/${userId}/${recipeId}`, {
            method: likeState ? "DELETE" : "POST"
        });

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return response.json();
    }
}

export default new LikeService();