import { render, screen } from '@testing-library/react';
import { TaskItem } from './TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: '1',
    title: 'Assistir a playlist de testes do Manual do Front',
    completed: false,
    createdAt: new Date()
  };

  const mockOnDelete = jest.fn();
  const mockOnToggle = jest.fn();

  test('renderiza título da tarefa', () => {
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete} 
        onToggle={mockOnToggle} 
      />
    );

    const title = screen.getByText('Assistir a playlist de testes do Manual do Front'); // ou mocTask.title
    expect(title).toBeInTheDocument();
  });
});