// --- Código
function validarTarefa(title: string) {
  if (title.trim() === '') {      // Linha 1
    return false;                 // Linha 2
  }
  return true;                    // Linha 3
}

// --- Teste
test('valida tarefa vazia', () => {
  expect(validarTarefa('')).toBe(false);
});

// --- Coverage
// Coverage desse teste:

// Linha 1: ✅ Executada
// Linha 2: ✅ Executada
// Linha 3: ❌ NÃO executada

// Coverage: 66% (2 de 3 linhas)