import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoItem = ({todo, onCompletedChange, onDelete}: TodoItemProps) => {
    return ( 
    <div>
        <label className="flex justify-between items-center gap-2 rounded-md border p-2 border-gray-400 bg-white hover:bg-slate-50">
            <div className="flex gap-2">
            <input 
            type="checkbox"
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125"/>
            <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
            </div>
            <button 
            className="hover:text-red-500 scale-125 px-2"
            onClick={() => onDelete(todo.id)}
            ><span>X</span></button>
        </label>
    </div> 
    );
}
 
export default TodoItem;