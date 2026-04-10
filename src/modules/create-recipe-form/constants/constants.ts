import type { CreateRecipeFormType } from "../utils/types.ts";

export const initialFormState: CreateRecipeFormType = {
    title: "",
    description: "",
    image: null,
    ingredients: [{ value: "", id: 1 }],
    instructions: [{ value: "", id: 1 }]
}