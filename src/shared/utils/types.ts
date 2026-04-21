
type User = {
    id: number,
    first_name: string,
    last_name: string,
    bio?: string,
}

type Recipe = {
    id: number,
    name: string,
    description: string,
    user_id: number,
    likes_count: number,
} & Omit<User, "id">

export { type User, type Recipe};