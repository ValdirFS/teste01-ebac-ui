/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

it('Deve Fazer Login Com Sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('Valdir.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir.teste (não é valdir.teste? Sair)')
})

})