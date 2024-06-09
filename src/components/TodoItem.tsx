import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem = ({todo}: TodoItemProps) => {
    return ( 
    <div>
        <label className="flex items-center gap-2 rounded-md border p-2 border-gray-400 bg-white hover:bg-slate-50">
            <input type="checkbox"  className="scale-125"/>
            <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.title}</span>
        </label>
    </div> 
    );
}
 
export default TodoItem;