const elementos = require('./elements').ELEMENTSCONFIG // importando os elementos declarados no arquivo elements.js



class Logout {

    realizarLogout() {
       cy.get(elementos.buttonSettings).click()
       cy.get(elementos.buttonLogout).click()
    }

    verificarLogout(){
        cy.wait('@TagsGET').its('response.statusCode').should('eq', 200)
    }
}

export default new Logout();