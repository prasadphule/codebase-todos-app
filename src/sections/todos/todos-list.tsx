'use client'

import { useQuery } from "@tanstack/react-query";
import { getTodos, Todo } from "../../api/todos-api";
import Link from "next/link";

export default function TodoList() {
  const { isLoading, isError, error, data } = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  if (isLoading) return "Loading...";

  if (isError) return `An error has occurred: ${error}`;

  return (
    <div>
      <h1>Todos</h1>
      {data?.map((todo: Todo) => (
        <li key={todo.id}>
         <Link href={`/todos/${todo.id}`}>{todo.title}</Link> 
        </li>
        ))
      }
    </div>
  );
}
