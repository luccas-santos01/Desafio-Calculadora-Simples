# Calculadora Simples

Este é um projeto de uma calculadora simples com testes automatizados usando o Cypress. A calculadora permite a realização de operações de adição, subtração, multiplicação, divisão e cálculos com números decimais.

## Funcionalidades

- Realizar operações de adição, subtração, multiplicação e divisão.
- Inserir números decimalmente.
- Excluir números.
- Redefinir a calculadora para o estado inicial.
- Lidar com erros de divisão por zero.

## Testes Automatizados

O projeto inclui testes automatizados para garantir que a calculadora funcione corretamente em várias situações. Abaixo estão os testes disponíveis:

### Teste de Adição Simples

- Clique nos botões 2, + e 3.
- Clique no botão de igual (=).
- Verifique se o resultado exibido é igual a 5.

### Teste de Subtração Simples

- Clique nos botões 8, - e 4.
- Verifique se o resultado exibido é igual a 4.

### Teste de Multiplicação Simples

- Clique nos botões 5, x e 7.
- Verifique se o resultado exibido é igual a 35.

### Teste de Divisão Simples

- Clique nos botões 9, / e 3.
- Verifique se o resultado exibido é igual a 3.

### Teste de Cálculo Decimal

- Clique nos botões 6, +, 0, . e 1 (para inserir 6.10).
- Verifique se o resultado exibido é igual a 6.10.

### Teste de Excluir (DEL)

- Insira um número, por exemplo, 123.
- Clique no botão DEL.
- Verifique se o resultado está vazio após a exclusão.

### Teste de Reinicialização (RESET)

- Realize algumas operações, como 7 + 3.
- Clique no botão RESET.
- Verifique se o resultado é redefinido para vazio e o visor está limpo.

### Teste de Erro de Divisão por Zero

- Tente realizar uma operação de divisão por zero (5 / 0).
- Verifique se a calculadora trata adequadamente o erro e exibe uma mensagem apropriada (Infinity).

## Nova Funcionalidade: Digitar Números com o Teclado Numérico

Agora, você pode digitar números na calculadora usando o teclado numérico. A calculadora responderá às entradas do teclado numérico da mesma forma que aos cliques nos botões.
