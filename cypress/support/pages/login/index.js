const elementos = require('./elements').ELEMENTSLOGIN // importando os elementos declarados no arquivo elements.js


class Login {

    visitarLogin() {
        cy.visit('login') // apontando a rota para página de login
    }

    preencherLogin() {
        cy.get(elementos.inputEmail).type(Cypress.config().user.email) // Buscando dados de email na variavel declarada no arquivo cypress.json
        cy.get(elementos.inputPassword).type(Cypress.config().user.password) // Buscando dados de senha na variavel declarada no arquivo cypress.json
    }

    realizarLogin() {
        cy.get(elementos.buttonSubmit).click()
    }

    verificarLogin(){
        cy.wait('@LoginPOST').its('response.statusCode').should('eq', 200)
        cy.wait('@FeedGET').its('response.statusCode').should('eq', 200)
        cy.wait('@TagsGET').its('response.statusCode').should('eq', 200)
    }
}

export default new Login();