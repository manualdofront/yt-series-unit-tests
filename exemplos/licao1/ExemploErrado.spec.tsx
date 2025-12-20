import { render } from '@testing-library/react';
import React from 'react';
import { TaskForm } from '../../src/components/TaskForm';

describe('Exemplo', () => {
  // ❌ TESTE RUIM (o que eu fazia)
  test('useState é chamado com string vazia', () => {
    const setStateSpy = jest.spyOn(React, 'useState');
    
    render(<TaskForm onAddTask={jest.fn()} />);
    
    expect(setStateSpy).toHaveBeenCalledWith('');
  });
});