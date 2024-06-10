import { Todo } from "../types/todo";

interface TodoSummaryProps {
    Todos: Todo[];
    deleteAllCompleted: () => void;
}

const TodoSummary = ({Todos, deleteAllCompleted}: TodoSummaryProps) => {
    const completedTodos = Todos.filter((todo) => todo.completed)
    
    return ( 
        <div className="text-center space-y-2">
            <p className="text-md font-medium">
                {completedTodos.length}/{Todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-red-500 hover:underline text-md font-medium">Delete Completed</button>
            )}
        </div>
     );
}
 
export default TodoSummary;