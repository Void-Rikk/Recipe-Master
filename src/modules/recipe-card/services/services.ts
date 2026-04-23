import { BASE_URL } from "../../../shared/constants/constants.ts";


type LikeResponse = {
    recipe_id: number,
    user_id: number,
    likeState: boolean,
}

interface ILikeService {
    like(recipeId: number, userId: number, likeState: boolean): Promise<LikeResponse>;
}

class LikeService implements ILikeService{

    async like(recipeId: number, userId: number, likeState: boolean): Promise<LikeResponse> {
        const response = await fetch(`${BASE_URL}/toggleLike`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                recipeId,
                userId,
                likeState
            }),
        });

        if (!response.ok) {
            throw new Error("HTTP Error");
        }

        return await response.json();
    }
}

export default new LikeService();