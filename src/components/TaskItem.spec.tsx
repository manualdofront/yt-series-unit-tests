import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('chama onToggle quando checkbox é clicado', async () => {
    const user = userEvent.setup();
    
    render(
      <TaskItem 
        task={mockTask}
        onDelete={mockOnDelete}
        onToggle={mockOnToggle}
      />
    );

    const checkbox = screen.getByRole('checkbox', { 
      name: mockTask.title
    });
    
    await user.click(checkbox);

    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith("1"); // ID da task
  });

  test('chama onDelete quando botão deletar é clicado', async () => {
    const user = userEvent.setup();
    
    render(
      <TaskItem 
        task={mockTask} 
        onDelete={mockOnDelete} 
        onToggle={mockOnToggle} 
      />
    );

    const deleteButton = screen.getByRole('button', { 
      name: /Delete task/i 
    });
    
    await user.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});