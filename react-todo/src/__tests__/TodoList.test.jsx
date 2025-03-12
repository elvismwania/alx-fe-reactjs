// src/__tests__/TodoList.test.js

import React from 'react';
import { render, fireEvent, screen, within } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React').closest('li');
    const deleteButton = within(todoItem).getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});
