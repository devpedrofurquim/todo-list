import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react'
import App from './App'

describe('Renders App', () => {

    beforeEach(() => render(<App/>));

    it('Renders Todo App Title', () => {
        expect(screen.getByText('Todo App')).toBeInTheDocument();
    })
})