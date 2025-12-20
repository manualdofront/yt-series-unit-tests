# ARMADILHA 1: Testes que só executam, não verificam

```tsx
test('renderiza componente', () => {
  render(<TaskForm onAddTask={jest.fn()} />);
  // Sem expect nenhum

  // expect() --> OBRIGATÓRIA
});
```

Esse teste executa código.
Coverage sobe.

Mas não VERIFICA nada.
Se componente quebrar, teste passa.

**SOLUÇÃO: Sempre tenha expect().**
