import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList.jsx';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds new todo', () => {
    render(<TodoList />);
    
    fireEvent.change(
      screen.getByTestId('todo-input'),
      { target: { value: 'New Test Todo' } }
    );
    fireEvent.click(screen.getByTestId('add-button'));
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    
    // Initial state
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    // Toggle
    fireEvent.click(todoText);
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('deletes todo', () => {
    render(<TodoList />);
    const initialTodos = screen.getAllByTestId(/todo-/i).length;
    
    fireEvent.click(screen.getAllByTestId('delete-button')[0]);
    
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
    expect(screen.getAllByTestId(/todo-/i)).toHaveLength(initialTodos - 1);
  });
});
