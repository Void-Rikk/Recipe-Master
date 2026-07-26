import type { CreateRecipeFormType } from "../utils/types.ts";

export const initialFormState: CreateRecipeFormType = {
    title: "",
    description: "",
    image: null,
    ingredients: [{ description: "", id: 1 }],
    instructions: [{ description: "", id: 1 }]
}