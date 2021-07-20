/// <reference types="cypress" /> 
// Essa referencia auxilia com informações da sintaxe do cypress, ao colocar o mouse em cima de um comando 

import Login from '../support/pages/login'
import Logout from '../support/pages/configuracoes'
context('Realizar o Login', () => {
    it('Visitar a página de login e logar com sucesso', () => {
       Login.visitarLogin()
       Login.preencherLogin() // nesse bloco utilizei conceitos de AAA ( Arrange Act Assert) e coloquei os steps dentro de funções, que ficaram na pasta support/pages/login
       Login.realizarLogin()
       Login.verificarLogin()
    });

    it('Realizar logout do sistema', () => {
        Logout.realizarLogout()
    });
});