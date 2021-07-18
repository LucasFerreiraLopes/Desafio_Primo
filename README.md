# Desafio_Primo
<<<<<<< HEAD
Inicialmente realizei um teste exploratório na ferramenta, verificando suas features e funcionamentos, identifiquei suas regras.

Como realizar um cadastro será um teste separado, identifiquei que precisaria usar alguma biblioteca ou plugin que gerasse dados randômicos para o cadastro, assim o teste nunca falharia por possuir dados hardcoded no teste. Pra isso eu optei por usar o plugin Faker.JS(https://www.npmjs.com/package/faker)

Já para o teste de login, optei por utilizar uma conta fixa, que criei inicialmente durante o teste exploratório que fiz na ferramenta, e como boa prática deixei essa conta declarada em variáveis no arquivo cypress.json, evitando assim dados sensiveis expostos no meu código.

Como eu segreguei o teste de login em um caso de testes separado, não seria ideal que repetisse o fluxo manual de login para os testes dentro da aplicação, pensando nisso optei por usar uma das funcionalidades que acho mais legal do Cypress, que é realizar o login em background, manipulando os dados das requisições da API e o local storage do navegador. Apesar de não ter muita prática com esse recurso, me desafiei a implementa-lo pois iria economizar tempo de teste. Para fazer essa chamada utilizei o conceito de "hooks" (beforeEach e afterEach).


Identifiquei que ao clicar no envio do artigo, a requisição "post" dele estava lenta, fiz uso do comando cy.intercept() para mapear essa requisição, e coloca-la no cy.wait() para que o teste conseguisse prosseguir com sucesso. 

Para os testes de publicação do artigo apliquei o conceito de Arrange, Act, Assert (AAA) https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/ . Transformando os steps do teste em funções na pasta support, também identifiquei que alguns elementos da página seriam utilizados novamente em outro teste (por exemplo o botão de envio, e o campo de descrição), então declarei os elementos no arquivo elements.js.

Como boa prática, realizei os passos acima para todos os casos de testes (Login/Cadastro/Artigo)


Realizei o mapeamento das rotas da API que são geradas quando enviamos um artigo na aplicação, e fiz testes de asserção para essas rotas. Coloquei no Index.JS raiz para iniciar o mapeamento das rotas antes dos testes.

Qual browser realizar o teste:

Chrome ou Electron

Plugins utilizados:

Faker.JS

Conceitos utilizados:

- Hooks
- AAA

Comandos para rodar o projeto:

npm Install
npm init
npm install -D Cypress
npm install -D Faker# Desafio_GrupoPrimo
# Teste-Primo
=======
>>>>>>> b6fbe50... first commit
