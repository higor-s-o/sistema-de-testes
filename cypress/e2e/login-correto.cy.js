describe('Página de Login', () => {

    beforeEach(() => {
      cy.visit('http://localhost:4200/#/home')
    })

      it('Preencher os campos corretamente para realizar o login', () => {
        cy.login('almeida', '123');

    })
  })