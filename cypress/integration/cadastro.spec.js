/// <reference types="cypress" /> 
// Essa referencia auxilia com informações da sintaxe do cypress, ao colocar o mouse em cima de um comando 
import Cadastro from '../support/pages/cadastro'; // importando as funções dos steps
const faker = require('faker') // invocando o uso do plugin gerador de dados randômicos

context('Realizar o Cadastro', () => {
    it('Visitar a página de registro e realizar um cadastro', () => {
        Cadastro.visitarCadastro()
        Cadastro.preencherCadastro()
        Cadastro.realizarCadastro()
    });
});