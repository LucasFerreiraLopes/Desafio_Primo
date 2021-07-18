class Rotas {
    init(){
        cy.intercept('POST','**/api/articles').as('ArtigoPOST');
        cy.intercept('GET', '**/api/articles/grupo-primo-**').as('ArtigoTitleGET');
        cy.intercept('GET', '**/api/articles/grupo-primo-**/comments').as('ArtigoCommentsGET')
    }
}

export default new Rotas();