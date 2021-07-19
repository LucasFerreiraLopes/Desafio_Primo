const elementos = require('./elements').ELEMENTSCADASTRO // importando os elementos declarados no arquivo elements.js
const faker = require('faker') // invocando o uso do plugin gerador de dados randômicos

class Cadastro {

    visitarCadastro(){
        cy.visit('register') // acessar a rota para página de registro
    }

    preencherCadastro(){
        cy.get(elementos.inputUsername).type(faker.name.firstName()+ faker.name.lastName()) // Aqui estou gerando o nome aleatorio usando o plugin "faker" e concatenando o primeiro nome com o ultimo nome
        cy.get(elementos.inputEmail).type(faker.internet.email())// gerando email aleatório com o plugin "faker"
        cy.get(elementos.inputPassword).type('12345678')
    }

    realizarCadastro(){
        cy.get(elementos.buttonSubmit).click()
    }

    verificarCadastro(){
        cy.wait('@CadastroPOST').its('response.statusCode').should('eq', 200)
        cy.wait('@FeedGET').its('response.statusCode').should('eq', 200)
        cy.wait('@TagsGET').its('response.statusCode').should('eq', 200)
    }
}

export default new Cadastro();