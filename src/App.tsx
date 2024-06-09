import { useState } from "react";
import { todosData } from "./data/todos";
import { Todo } from "./types/todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";



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

  function deleteTodo(id: number): void {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
  }

  return (
   <main className="p-10 h-screen space-y-5 overflow-y-auto">
    <h1 className="font-bold text-3xl text-center">
      Todo App
    </h1>
    <div className="max-w-lg mx-auto space-y-4 bg-slate-100 rounded p-5 border-gray-400 border-2">
      <TodoList 
      Todos={Todos}
      onCompletedChange={setTodoCompleted}
      onDelete={deleteTodo}
      />
      <TodoForm onSubmit={addTodo}/>
    </div>
   </main>
  )
}

export default App;