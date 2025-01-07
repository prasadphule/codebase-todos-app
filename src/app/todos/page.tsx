import TodoList from "@/sections/todos/todos-list";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Todos",
    description: "A simple todo list",
}

export default function Page() {
  return <TodoList/>
}
