export interface CreateRecipeFormType {
    title: string,
    description: string,
    image: File | null,
    ingredients: { description: string, id: number }[],
    instructions: { description: string, id: number }[]
}