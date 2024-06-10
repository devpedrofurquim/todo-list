import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { todosData } from "../data/todos";

export default function useTodos() {
    const [Todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : todosData;
      })
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(Todos));
      }, [Todos])
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) => prevTodos.map(todo => (
          todo.id === id ? {...todo, completed} : todo
        )))
      }
    
      function addTodo(title: string) {
        setTodos((prevTodos) => [
          {
            id: Date.now(),
            title,
            completed: false
          },
          ...prevTodos
        ])
      }
    
      function deleteTodo(id: number): void {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
      }
    
      function deleteAllCompleted() {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
      }

      return {
        Todos,
        setTodoCompleted,
        addTodo,
        deleteAllCompleted,
        deleteTodo
      }
}