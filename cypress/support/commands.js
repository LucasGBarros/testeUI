Cypress.Commands.add('basicComand', function(){
    cy.contains('button', 'Aceitar todos Cookies e continue').click() 
    cy.get('.natds16 > .MuiIconButton-label > .material-icons').click()
})

Cypress.Commands.add('selectProduct', function(){
    cy.get('.MuiInputBase-input').type('Deo Parfum Natura Homem Emocion.e')
    cy.get('.MuiTypography-root').contains('Natura Homem Emocion.e Deo Parfum').should('be.visible').click()
})

Cypress.Commands.add('addToCart', function(){
    cy.get('.MuiButton-label').contains('Adicionar').should('be.visible').click()
    cy.contains('tel', 'Digite o CEP aqui').click()
    cy.type('24756-430{enter}')
    cy.wait(3000)
})

Cypress.Commands.add('validateAddition', function(){
    cy.get('#increment-button > .MuiButton-label').click()
    cy.wait(4000)
    cy.get('[data-testid="basket-badge"] > .MuiIconButton-label > .material-icons').click()
    cy.get('.MuiInputBase-input')
      cy.should('have.value', '2')
})