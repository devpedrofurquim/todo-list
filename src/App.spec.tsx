import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react'
import App from './App'
import * as useTodos from './hooks/useTodos';

const useTodosSpy = jest.spyOn(useTodos, "useTodos");

function renderApp() {
    render(<App/>)
}

describe('Renders App', () => {

    it('Renders Todo App Title', () => {
        renderApp();
        expect(screen.getByText('Todo App')).toBeInTheDocument();
    })
})

describe("useTodos", () => {

    it("should render all todos", () => {
        useTodosSpy.mockReturnValue({
            Todos: [{
                id: 10,
                title: 'New Todo',
                completed: false,
            }],
            setTodoCompleted: jest.fn(),
            addTodo: jest.fn(),
            deleteAllCompleted: jest.fn(),
            deleteTodo: jest.fn()
        })

        renderApp();

        const title = 'New Todo';

        expect(screen.getByText(title)).toBeInTheDocument;
    });

    it('should call setTodoCompleted when a todo is marked as completed', () => {
        const mockSetTodoCompleted = jest.fn();

        useTodosSpy.mockReturnValue({
            Todos: [{
                id: 10,
                title: 'New Todo',
                completed: false,
            }],
            setTodoCompleted: mockSetTodoCompleted,
            addTodo: jest.fn(),
            deleteAllCompleted: jest.fn(),
            deleteTodo: jest.fn()
        })

        renderApp()

        const checkbox = screen.getByLabelText('New Todo');

        fireEvent.click(checkbox);

        expect(mockSetTodoCompleted).toHaveBeenCalledWith(10, true);
    })

    it('should addTodo after the App is rendered', () => {
        const mockAddTodo = jest.fn();

        useTodosSpy.mockReturnValue({
            Todos: [{
                id: 10,
                title: 'New Todo',
                completed: false,
            }],
            setTodoCompleted: jest.fn(),
            addTodo: mockAddTodo,
            deleteAllCompleted: jest.fn(),
            deleteTodo: jest.fn()
        })

        renderApp()

        const input = screen.getByPlaceholderText('Add Todo');
        const button = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'Novo Todo' } });

        fireEvent.click(button);

        expect(mockAddTodo).toHaveBeenCalledWith('Novo Todo');

    })

    //TODO: Implement DeleteAllCompleted Test
    //TODO: Implement DeleteTodo test
})