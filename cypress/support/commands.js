// Processo para realizar o Login em background manipulando as requisições
Cypress.Commands.add('login', (email, password) =>{
    cy.request({
        method: 'POST',
        url: `${Cypress.config().UrlAPI}users/login`, // puxando a url da api configurada no cypress.json, e setando a rota dela
        body: {
            user: {
                email: Cypress.config().user.email,
                password: Cypress.config().user.password
            }
        }
    }).then((loginReponse) =>{
        // setando mais informações no visit, usando comando para agir antes do carregamento da pagina, e o comando "win" para ter acesso aos mecanismos do navegador
        cy.visit('editor', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwt', loginReponse.body.user.token) // enviando minha chave e o token para o local storage do navegador
            }
        })
    })
})