# Desafio Primo
## Aplicação a ser testada:
A aplicação utilizada para o desafio foi a https://react-redux.realworld.io/ , uma rede social com funcionamento semelhante ao "Twitter", onde o usuário faz um cadastro, e estando logado pode realizar publicações que ficam em uma linha de tempo global.

---
## Evidência do Projeto:
Para gravar um vídeo como evidência do bom funcionamento dos testes, bem como suas asserções,  utilizei a ferramenta Loom.

Para verificar o vídeo de evidência [clique aqui](https://www.loom.com/share/55ad5d861d934745a635bac67ac72261 "clique aqui")

---
## Levantamento de Casos de Testes

Inicialmente realizei um teste exploratório na ferramenta,  utilizando técnica funcional como caixa preta para verificar suas funcionalidades e comportamentos, identifiquei suas regras de negócios e com isso tive massa de dados suficientes para começar a levantar os cenários de testes à serem automatizados.

---
## Entendendo os casos de Testes:
#### Cadastro
Como realizar um cadastro na aplicação seria um teste separado, identifiquei que precisaria usar alguma biblioteca ou plugin que gerasse dados randômicos para o cadastro, assim o teste nunca falharia por possuir dados hardcoded no teste. Pra isso eu optei por usar o plugin Faker.JS, que me possibilita gerar dados aleatórios como: Email, Nome, Senhas, etc...

---
 #### Login
Já para o teste de login, optei por utilizar uma conta fixa, que criei inicialmente durante o teste exploratório que fiz na ferramenta, e como boa prática deixei essa conta declarada em variáveis no arquivo cypress.json, evitando assim dados sensiveis expostos no meu código.

Como eu segreguei o teste de login em um caso de testes separado, não seria ideal que repetisse o fluxo manual de login para os testes dentro da aplicação, pensando nisso optei por usar uma das funcionalidades que acho mais legal do Cypress, que é realizar o login em background, manipulando os dados das requisições da API e o local storage do navegador. Apesar de não ter muita prática com esse recurso, me desafiei a implementa-lo pois iria economizar tempo de teste. Para fazer essa chamada utilizei o conceito de "hooks" (beforeEach e afterEach).

---
#### Artigos
Identifiquei que ao clicar no envio do artigo, a requisição "post" dele estava lenta, fiz uso do comando cy.intercept() para mapear essa requisição, e coloca-la no cy.wait() para que o teste conseguisse prosseguir com sucesso. 

Como boa prática, para todos os casos de testes (Login/Cadastro/Artigo) apliquei o conceito de Arrange, Act, Assert (AAA) .

Transformando os steps dos teste em funções na pasta suppor/pages, também identifiquei que alguns elementos da página seriam utilizados novamente em outro teste (por exemplo o botão de envio, e o campo de descrição), então declarei os elementos no arquivo elements.js.

Como boa prática, realizei os passos acima para

## Mapeamento de Rotas
Realizei o mapeamento das rotas da API que são geradas quando enviamos um artigo na aplicação, e fiz testes de asserção para essas rotas.
As rotas estão mapeadas no arquivo Routes.js, e coloquei no Index.js raiz do projeto um hook para iniciar o mapeamento das rotas antes dos testes.

## Integração Continua
Para verificar se os testes estariam adaptados à um processo de integração continua, implementei o projeto ao GitHub Actions e implementei um evento Cron para rodar à cada 1 hora, é uma boa forma de verificar se o testes precisam de alguma manutenção e se a aplicação continua com os fluxos funcionais.


## Qual navegador  os testes foram realizados?

Chrome ✅

## Plugins utilizados no projeto:

[Faker.JS](https://www.npmjs.com/package/faker)

## Conceitos utilizados:

- [Hooks](https://www.toolsqa.com/cypress/cypress-hooks/ "Hooks")
- [Arrange/Act/Assert(AAA).](https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/)
- [Page Objects](https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/ "Page Objects")
- [Background Login](https://docs.cypress.io/guides/references/best-practices "Background Login")
- Random Data
- [CI Github Actions](https://docs.github.com/en/actions/guides/about-continuous-integration "CI Github Actions")
- [CRON Jobs](https://www.hivelocity.net/kb/what-is-cron-job/ "CRON Jobs")
## Comandos para instalar e rodar o projeto:

``npm Install``
``npm init``
`npm install -D Cypress`
`npm install -D Faker`
`npx cypress open`
