import TodoItem from "./components/TodoItem";
import { todosData } from "./data/todos";


function App() {

  function setTodoCompleted(id: number, completed: boolean) {
    alert(`Todo with id ${id} is now ${completed ? "completed" : "active"}`)
  }

  return (
   <main className="p-10 h-screen space-y-5">
    <h1 className="font-bold text-3xl text-center">
      Todo App
    </h1>
    <div className="max-w-lg mx-auto bg-slate-100 rounded p-5 border-gray-400 border-2">
      <div className="space-y-2">
        {todosData.map(todo => (
          <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={setTodoCompleted}
          />
        ))}
      </div>
    </div>
   </main>
  )
}

export default App;