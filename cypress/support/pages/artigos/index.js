const elementos = require('./elements').ELEMENTSARTIGO // importando os elementos declarados no arquivo elements.js

class Articles {

    preencherArtigo() {
        cy.get(elementos.inputTitulo).type('Grupo Primo')
        cy.get(elementos.inputSubTitulo).type('Best investment and entrepreneur content')
        cy.get(elementos.inputDescricao).type('Follow @thiago.nigro on Instagram') // elementos da página estão setados na pasta elements.js
        cy.get(elementos.inputTags).type('Investment')
    }
    
    enviarArtigo() {
        cy.get(elementos.buttonSubmit).click() // Publicando o Artigo
    }
    // asserção das rotas mapeadas, o mapeamento das rotas é feito no arquivo "Routes.js"
    verificarPublicacaoArtigo(){
        cy.wait('@ArtigoPOST').its('response.statusCode').should('eq', 200)
        cy.wait('@ArtigoTitleGET').its('response.statusCode').should('eq', 200)
        cy.wait('@ArtigoCommentsGET').its('response.statusCode').should('eq', 200)
    }

    visualizarArtigos(){
        cy.get(elementos.buttonGlobalFeed).click()
        cy.get(elementos.buttonArticle).click()
    }

    deletarArtigo(){
        cy.get(elementos.buttonDelete).click({multiple:true})
    }
}
export default new Articles();