/// <reference types="Cypress" />

const { type } = require("os")

describe('1 - Teste de Adição Simples:', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
  it('Clique nos botões 2, +, e 3', () => {
    cy.contains('button','2').click()
    cy.contains('button','+').click()
    cy.contains('button','3').click()
  })
  it('Clique no botão de igual = ', () => {
    cy.contains('button','2').click()
    cy.contains('button','+').click()
    cy.contains('button','3').click()
    cy.contains('button','=').click()
  })
  it('Verifique se o resultado exibido é igual a 5', () => {
    cy.contains('button','2').click()
    cy.contains('button','+').click()
    cy.contains('button','3').click()
    cy.contains('button','=').click()
    cy.contains('p','5')
  })
  })
describe('2 - Teste de Subtração Simples:', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
  it('Clique nos botões 8, -, e 4', () => {
  cy.contains('button','8').click()
  cy.contains('button','-').click()
  cy.contains('button','4').click()
})
it('Verifique se o resultado exibido é igual a 4', () => {
  cy.contains('button','8').click()
  cy.contains('button','-').click()
  cy.contains('button','4').click()
  cy.contains('button','=').click()
  cy.contains('p','4')
})
})
describe('3 - Teste de Multiplicação Simples:', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
  it('Clique nos botões 5, x, e 7', () => {
  cy.contains('button','5').click()
  cy.contains('button','x').click()
  cy.contains('button','7').click()
})
it('Verifique se o resultado exibido é igual a 35', () => {
  cy.contains('button','5').click()
  cy.contains('button','x').click()
  cy.contains('button','7').click() 
  cy.contains('button','=').click()
  cy.contains('p','35')
})
})
describe('4 - Teste de Divisão Simples:', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
  it('Clique nos botões 9, /, e 3', () => {
  cy.contains('button','9').click()
  cy.contains('button','/').click()
  cy.contains('button','3').click()
  cy.contains('button','=').click()
})
it('Verifique se o resultado exibido é igual a 3', () => {
  cy.contains('button','9').click()
  cy.contains('button','/').click()
  cy.contains('button','3').click()
  cy.contains('button','=').click()
  cy.contains('p','3')
})
})
describe('5 - Teste de Cálculo Decimal', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
  it('Clique nos botões 6, +, 1, 0, e . (para inserir 6.10)', () => {
  cy.contains('button','6').click()
  cy.contains('button','+').click()
  cy.contains('button','0').click()
  cy.contains('button','.').click()
  cy.contains('button','1').click()
  cy.contains('button','=').click()
})
it('Verifique se o resultado exibido é igual a 6.10', () => {
  cy.contains('button','6').click()
  cy.contains('button','+').click()
  cy.contains('button','0').click()
  cy.contains('button','.').click()
  cy.contains('button','1').click()
  cy.contains('button','=').click()
  cy.contains('p','6,10')
})
})
describe('6 - Teste de Excluir (DEL)', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
it('Insira um número, por exemplo, 123', () => {
  cy.contains('button','1').click()
  cy.contains('button','2').click()
  cy.contains('button','3').click()
})
it('Clique no botão DEL', () => {
  cy.contains('button','1').click()
  cy.contains('button','2').click()
  cy.contains('button','3').click()
  cy.contains('button','DEL').click().click().click()
})
it('Verifique se o resultado está vazio após a exclusão.', () => {
  cy.contains('button','1').click()
  cy.contains('button','2').click()
  cy.contains('button','3').click()
  cy.contains('button','DEL').click().click().click()
  cy.get('p').should('have.text', '')
})
})
describe('7 - Teste de Reinicialização (RESET)', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
it('Realize algumas operações, como 7 + 3', () => {

    cy.contains('button','7').click()
    cy.contains('button','+').click()
    cy.contains('button','3').click()
})
it('Clique no botão RESET', () => {
  cy.contains('button','7').click()
  cy.contains('button','+').click()
  cy.contains('button','3').click()
  cy.contains('button','RESET').click()
})  
it('Verifique se o resultado é redefinido para vazio e o visor está limpo', () => {
  cy.contains('button','7').click()
  cy.contains('button','+').click()
  cy.contains('button','3').click()
  cy.contains('button','RESET').click()
  cy.get('p').should('have.text', '')
})  
}) 
describe('8 - Teste de Erro de Divisão por Zero', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
  }) 
it('Tente realizar uma operação de divisão por zero 5 / 0', () => {
  cy.contains('button','5').click()
  cy.contains('button','/').click()
  cy.contains('button','0').click()
  })
it('Verifique se a calculadora trata adequadamente o erro e exibe uma mensagem apropriada', () => {
  cy.contains('button','5').click()
  cy.contains('button','/').click()
  cy.contains('button','0').click()
  cy.contains('button','=').click()
  cy.get('p').should('have.text', 'Infinity')
})
})
