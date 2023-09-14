import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  })

  it('Preencher os campos do formulário correntamente para cadastrar um novo usuário', () => {
    
    // cy.get('[data-test="register"]').click();
    // cy.get('[data-test="email"]').type('catarina@email.com.br');
    // cy.get('[data-test="fullName"]').type('Catarina Pessoa');
    // cy.get('[data-test="registerUserName"]').type('catarinap'); 
    // cy.get('[data-test="registerPassword"]').type('catarina123');
    // cy.get('[data-test="btnRegister"]').click();    
    
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();



  })
})