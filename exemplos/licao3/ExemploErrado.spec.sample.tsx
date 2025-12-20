import React from 'react';
import { TaskForm } from '../../src/components/TaskForm';

describe.skip('Exemplo', () => {
  // ❌ SEM LIMPEZA (o que eu fazia)
  test('componente A carrega dados', async () => {
    global.fetch = jest.fn(() => 
      Promise.resolve({ json: () => Promise.resolve([...]) })
    );
    
    render(<ComponentA />);
    // ... verificações
    
    // NÃO limpei mock
  });

  test('componente B carrega dados', async () => {
    // fetch ainda tá mockado aqui!
    render(<ComponentB />);
    // ... teste quebra 💥
  });
});