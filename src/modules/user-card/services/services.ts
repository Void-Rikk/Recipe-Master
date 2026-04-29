import type { User } from "../../../shared/utils/types.ts";
import { BASE_URL } from "../../../shared/constants/constants.ts";

export type UserWithRecipeCount = {
    recipes_count: number
} & User;

interface IUserService {
    getUserInfo(userId: number): Promise<UserWithRecipeCount>;
}

class UserService implements IUserService {

    async getUserInfo(userId: number): Promise<UserWithRecipeCount> {
        const response = await fetch(`${BASE_URL}/user/${userId}`);

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        return await response.json();
    }
}

export default new UserService();