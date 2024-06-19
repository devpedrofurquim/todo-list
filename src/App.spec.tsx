import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import App from './App'

describe('Renders App', () => {

    beforeEach(() => {
        render(<App/>)
    })

    it('Renders App', () => {
        render(<App/>)
    })

    it('Todo App text is rendered', () => {
        expect(screen.getByText('Todo App')).toBeInTheDocument();
    })

    it('Todo App text is rendered', () => {
        expect(screen.getByText('Todo App')).toBeInTheDocument();
    })
})