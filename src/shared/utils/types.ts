
type User = {
    id: number,
    first_name: string,
    last_name: string,
    bio?: string,
    avatar_id?: string,
    avatar_extension?: string,
}

type Recipe = {
    id: number,
    name: string,
    description: string,
    user_id: number,
    likes_count: number,
    image_id: string,
    image_extension: string,
} & Omit<User, "id">

export { type User, type Recipe};