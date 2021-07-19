class Rotas {
    init(){
        //Artigos
        cy.intercept('POST','**/api/articles').as('ArtigoPOST');
        cy.intercept('GET', '**/api/articles/grupo-primo-**').as('ArtigoTitleGET');
        cy.intercept('GET', '**/api/articles/grupo-primo-**/comments').as('ArtigoCommentsGET')
        //Login
        cy.intercept('POST', '**/api/users/login').as('LoginPOST')
        cy.intercept('GET', '**/api/articles/feed**').as('FeedGET')
        cy.intercept('GET', '**/api/tags').as('TagsGET')
        //Cadastro
        cy.intercept('POST', '**api/users').as('CadastroPOST')
    }
}

export default new Rotas();