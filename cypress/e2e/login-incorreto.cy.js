describe('Página de Login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')

    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400
    }).as('stubPost')

  })

    it('Verificar mensagens de campo obrigatorios', () => {
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
      
    })

    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('carowl', '12345678');
      cy.wait('@stubPost')
      
    })
    

  })