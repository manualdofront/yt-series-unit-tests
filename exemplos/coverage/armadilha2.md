# ARMADILHA 2: Testar código alheio

```tsx
test('useState funciona', () => {
  const [value, setValue] = useState('');
  setValue('teste');
  expect(value).toBe('teste');
});
```

Você tá testando REACT, não seu código.

React já tem testes.
Não precisa testar de novo.

**SOLUÇÃO: Teste SUA lógica, não bibliotecas.**
