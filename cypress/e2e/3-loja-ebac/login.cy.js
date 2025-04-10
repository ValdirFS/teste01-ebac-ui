/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()

    });
    
    it('Deve Fazer Login Com Sucesso', () => {
    cy.get('#username').type('Valdir.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir.teste (não é valdir.teste? Sair)')
})

it('Deve exibir uma messagem de erro ao inserir usuário inválido', () => {
    cy.get('#username').type('Valdir@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click() 
    cy.get('.woocommerce-error').should('exist')
});

it('Deve exibir uma messagem de erro ao enserir senha inválida', () => {
    cy.get('#username').type('Valdir.teste@teste.com.br')
    cy.get('#password').type('teste@000')
    cy.get('.woocommerce-form > .button').click() 
    cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail Valdir.teste@teste.com.br está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
});

it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir.teste (não é valdir.teste? Sair)')
    });

    it('Deve fazer login com sucesso - Usando fixtures', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario , { log: false })
            cy.get('#password').type(dados.senha , { log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir.teste (não é valdir.teste? Sair)')

        })

    });

    it('Deve fazer login com sucesso - usando Comandos customizado' , () => {
        cy.login('Valdir.teste@teste.com.br' , 'teste@123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, valdir.teste (não é valdir.teste? Sair)')
    });

})