export type User = {
    id: number
    name: string
    email: string
}

export type UserInput = Pick<User, "email" | "name">

export type Data = {
    name: string
    uv: number
    pv: number
    amt: number
}