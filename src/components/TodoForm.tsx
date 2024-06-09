import { useState } from "react";

interface TodoFormProps {
    onSubmit: (title: string) => void;
}

const TodoForm = ({onSubmit} : TodoFormProps) => {
    const [Input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        if (!Input.trim()) return;

        onSubmit(Input);
        setInput("");
    }

    return ( 
        <form className="flex" onSubmit={handleSubmit}>
            <input 
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add Todo"
            className="rounded-s-md grow border-2 border-gray-400 p-1" />
            <button
            type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800"
            >Add</button>
        </form>
     );
}
 
export default TodoForm;