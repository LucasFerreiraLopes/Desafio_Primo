/// <reference types="cypress" /> 
// Essa referencia auxilia com informações da sintaxe do cypress, ao colocar o mouse em cima de um comando 

import artigos from '../support/pages/artigos'; // importando as funções dos steps

context('Publicação de Artigo', () => {
   
   beforeEach(() => {
       cy.login() // importando função de login por requisição e local storage
   });
   
    it('Criar nova publicação de artigo', () => {
        //nesse bloco utilizei o conceito de AAA ( Arrange Act Assert) e coloquei os steps dentro de funções, que ficaram na pasta support/pages/artigos
        artigos.preencherArtigo() 
        artigos.enviarArtigo()
        artigos.verificarPublicacaoArtigo()
    });
});
