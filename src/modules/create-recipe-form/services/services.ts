import { BASE_URL } from "../../../shared/constants/constants.ts";

type CreateRecipeResponseStatus = {
    status: boolean,
    message: string,
}

interface ICreateRecipeService {
    create(formData: FormData): Promise<CreateRecipeResponseStatus>;
}

class CreateRecipeService implements ICreateRecipeService{
    async create(formData: FormData): Promise<CreateRecipeResponseStatus> {
        const response = await fetch(`${BASE_URL}/createRecipe`, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error(response.status + " " + response.statusText);
        }

        return await response.json();
    }
}

export default new CreateRecipeService();