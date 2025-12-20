import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskForm } from '../../src/components/TaskForm';

describe('Exemplo', () => {
  // ✅ TESTE ÚTIL (foco em lógica crítica)
  test('validação: não aceita campo vazio', async () => {
    const mockOnAdd = jest.fn();
    render(<TaskForm onAddTask={mockOnAdd} />);
    
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    // Lógica crítica: função NÃO deve ser chamada
    expect(mockOnAdd).not.toHaveBeenCalled();
  });

  test('validação: não aceita só espaços', async () => {
    const mockOnAdd = jest.fn();
    render(<TaskForm onAddTask={mockOnAdd} />);
    
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    await userEvent.type(input, '   ');
    await userEvent.click(screen.getByRole('button'));
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});