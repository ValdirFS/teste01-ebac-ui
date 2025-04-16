/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach( () => {
      produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutosLista('Ariel Roll Sleeve Sweatshirt')
            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });

    it.only('Deve buscar um produto com sucesso', () => {
       let produto = 'Autumn Pullie'
         produtosPage.buscarProdutos(produto)
         cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
      
    });

    it('Deve adicionar produto ao carrinho', () => {
      
    });

});