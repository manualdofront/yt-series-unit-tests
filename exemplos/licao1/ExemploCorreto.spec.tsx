import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskForm } from '../../src/components/TaskForm';

describe('Exemplo', () => {
  // ✅ TESTE BOM (o que deveria fazer)
  test('campo começa vazio e aceita digitação', async () => {
    render(<TaskForm onAddTask={jest.fn()} />);
    
    const input = screen.getByPlaceholderText(/what needs to be done/i);
    
    // Comportamento 1: campo vazio
    expect(input).toHaveValue('');
    
    // Comportamento 2: aceita digitação
    await userEvent.type(input, 'Nova tarefa');
    expect(input).toHaveValue('Nova tarefa');
  });
});