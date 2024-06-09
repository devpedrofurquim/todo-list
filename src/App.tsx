import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { todosData } from "./data/todos";
import { Todo } from "./types/todo";
import TodoForm from "./components/TodoForm";



function App() {
  const [Todos, setTodos] = useState<Todo[]>(todosData)

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) => prevTodos.map(todo => (
      todo.id === id ? {...todo, completed} : todo
    )))
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false
      },
      ...prevTodos
    ])
  }

  return (
   <main className="p-10 h-screen space-y-5">
    <h1 className="font-bold text-3xl text-center">
      Todo App
    </h1>
    <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 border-gray-400 border-2">
      <div className="space-y-2">
        {Todos.map((todo) => (
          <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={setTodoCompleted}
          />
        ))}
        <TodoForm onSubmit={addTodo}/>
      </div>
    </div>
   </main>
  )
}

export default App;