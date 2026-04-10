export interface CreateRecipeFormType {
    title: string,
    description: string,
    image: File | null,
    ingredients: { value: string, id: number }[],
    instructions: { value: string, id: number }[]
}