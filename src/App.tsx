import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";



function App() {

  const {Todos, setTodoCompleted, addTodo, deleteAllCompleted, deleteTodo} = useTodos();

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
    <TodoSummary Todos={Todos} deleteAllCompleted={deleteAllCompleted}/>
   </main>
  )
}

export default App;