import React from 'react';
import { TaskForm } from '../../src/components/TaskForm';

describe('Exemplo', () => {
  // ❌ TESTES INÚTEIS (que eu fazia)
  test('importação do React funciona', () => {
    expect(React).toBeDefined();
  });

  test('componente é uma função', () => {
    expect(typeof TaskForm).toBe('function');
  });

  test('props tem propriedade onAddTask', () => {
    const props = { onAddTask: jest.fn() };
    expect(props).toHaveProperty('onAddTask');
  });
});