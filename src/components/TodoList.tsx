import { PartyPopper } from "lucide-react";
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    Todos: Todo[];
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

const TodoList = ({
    Todos,
    onCompletedChange,
    onDelete
} : TodoListProps) => {

    const todosSorted = Todos.sort((a,b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    })

    return (
        <>
        <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
          key={todo.id}
          todo={todo}
          onCompletedChange={onCompletedChange}
          onDelete={onDelete}
          />
        ))}
      </div>
      {Todos.length === 0 && (
        <div className="flex grow items-center justify-center gap-2">
            <p className="text-center text-md">No more todos! Congrats!</p>
            <PartyPopper color="green"/>
        </div>
      )}
        </> 
     );
}
 
export default TodoList;