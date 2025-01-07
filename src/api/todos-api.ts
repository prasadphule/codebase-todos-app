import axios from "axios"

export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const getTodos = async () => {
    const resp = await axios.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
    return resp.data
}