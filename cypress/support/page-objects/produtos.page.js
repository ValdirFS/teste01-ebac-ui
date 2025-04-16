class produtosPage {

 visitarUrl() {
    cy.visit('produtos')
 }

 buscarProdutos(nomeProduto) {
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('.button-search ').eq(1).click()
}
 
buscarProdutosLista(nomeProduto) {
    cy.get('.product-block ')
    .contains(nomeProduto)
    .click()
}

visitarProduto() {

}

addProdutoCarrinho() {

}

}

export default new produtosPage()
