describe('Efetuar uma compra', () => {
  it.only('Adicionar um produto ao carrinho', () => {
    cy.visit('https://www.natura.com.br/')
    cy.basicComand()
    cy.selectProduct()
    cy.addToCart()
    cy.validateAddition()
  })
})