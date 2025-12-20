import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TaskForm } from '../../src/components/TaskForm';

describe('Exemplo', () => {
  // ✅ COM LIMPEZA
  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });
  
  test('componente A', async () => {
    global.fetch = jest.fn(...);
    // ... teste
    // Mock limpo automaticamente no afterEach
  });
  
  test('componente B', async () => {
    // fetch limpo, posso mockar de novo
    global.fetch = jest.fn(...);
    // ... teste
  });
});