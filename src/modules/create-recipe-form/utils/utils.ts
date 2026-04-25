import type { CreateRecipeFormType } from "./types.ts";

export function validateCreateRecipeForm(form: CreateRecipeFormType): [string, boolean] {
    if (!form.title
        || ! form.description
        || !form.image
        || !form.instructions.length
        || !form.ingredients.length
        || form.instructions.some(el => el.description.length === 0)
        || form.ingredients.some(el => el.description.length === 0)
    ) {
        return ["Не все поля заполнены", false];
    }

    const allowedFiles = new Map([["image/jpeg", true],
        ["image/png", true],
        ["image/jpg", true],
        ["image/webp", true],
        ["image/avif", true]]);

    if (!allowedFiles.has(form.image.type)) {
        return ["Недопустимый формат файла", false];
    }

    return ["", true];
}

export function createFormData(form: CreateRecipeFormType, userId: number): FormData {
    const formData = new FormData();

    if (!form.image) {
        throw new Error("No image");
    }

    formData.append("name", form.title);
    formData.append("description", form.description);
    formData.append("image", form.image);
    formData.append("ingredients", JSON.stringify(form.ingredients));
    formData.append("instructions", JSON.stringify(form.ingredients));
    formData.append("user_id", `${userId}`);

    return formData;
}