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

    it('Deve buscar um produto com sucesso', () => {
       let produto = 'Autumn Pullie'
         produtosPage.buscarProdutos(produto)
         cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
      produtosPage.visitarProduto('Aether Gym Pant')
      cy.get('.product_title').should('contain', 'Aether Gym Pant')
      
    });

    it('Deve adicionar produto ao carrinho', () => {
      let qtd = 7
      produtosPage.buscarProdutos('Abominable Hoodie')
      produtosPage.addProdutoCarrinho('M', 'Red', qtd)

      cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
      
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
      cy.fixture('produtos').then(dados => {
          produtosPage.buscarProdutos(dados[0].nomeProduto)
          produtosPage.addProdutoCarrinho(
            dados[0].tamanho,
            dados[0].cor, 
            dados[0].quantidade)
      cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
    })
      
      
      
      
    });

});