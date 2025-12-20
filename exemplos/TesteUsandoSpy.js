/**
 * Exemplo de teste (não tem vínculo com o projeto, por isso está comentado)
 
import { toast } from 'react-toastify';

const handleAddTask = (title) => {
  addTask(title);
  toast.success('Tarefa adicionada com sucesso!');
};

// O que queremos testar?
//  toast.success foi chamado?

// =========== TESTE
import { toast } from 'react-toastify';

test('mostra toast de sucesso ao adicionar tarefa', async () => {
  const toastSuccessSpy = jest.spyOn(toast, 'success').mockReturnValue({
    success: jest.fn()
  });
  
  render(<TaskForm onAddTask={handleAddTask} />);
  
  const input = screen.getByPlaceholderText(/what needs to be done/i);
  await userEvent.type(input, 'Nova tarefa');
  await userEvent.click(screen.getByRole('button'));
  
  expect(toastSuccessSpy.success).toHaveBeenCalledWith(
    'Tarefa adicionada com sucesso!'
  );
  
  toastSuccessSpy.mockRestore();
});
*/
