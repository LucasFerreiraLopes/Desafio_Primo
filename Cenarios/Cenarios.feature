Feature: Aplicação Conduit

    Aplicação consiste em ser uma rede social para publicação e interação de artigos
    Semelhante ao funcionamento do twitter, com uma funcionalidade de linha do tempo,
    aonde podemos visualizar todos os artigos postados pelos usuários.  


    Scenario: Acessar a aplicação e visualizar o feed global
    Given que desejo entrar no site
    When estiver na pagina principal
    Then devo visualizar o feed global

    Scenario: Realizar cadastro sem preencher todos os campos
    Given que não possuo um cadastro no sistema
    When eu me cadastrar sem preencher todos os campos
    Then o sistema mostra uma mensagem de erro por faltar preencher os campos


    Scenario: Realizar Cadastro no site
    Given que não possuo um cadastro
    When eu estiver na pagina de cadastro
    And preencher todos os dados corretamente
    Then estarei logado no sistema com minha nova conta e estarei vendo o feed global

    Scenario: Realizar Login sem preencher todos os campos obrigatórios
    Given que possuo um cadastro no site
    When eu inserir os dados errados ou esquecer de preencher um campo
    And tentar realizar o login
    Then o sistema deve apresentar uma mensagem de erro de email ou senha invalid

    Scenario: Realizar Login no site
    Given que estou no site mas não estou logado
    When eu estiver na pagina de login
    And preencher os campos com os dados da minha conta
    Then estarei logado no sistema com a minha conta informada

    Scenario: Deslogar minha conta do site
    Given que estou logado no sistema e quero deslogar
    When eu acessar configurações e clicar em logout
    Then eu serei desconectado e direcionado a pagina principal

    Scenario: Publicar um artigo sem preencher todos os campos 
    Given que desejo publicar um artigo apenas com titulo
    When eu não preencher todos os dados do artigo
    Then o sistema deve me mostrar uma mensagem de erro pedindo para preencher os campos


    Scenario: Publicar um Artigo completo
    Given que desejo publicar um artigo
    When  eu estiver na página de criar artigo
    And preencher o artigo com as informações necessárias
    Then devo publicar e visualizar o artigo que acabei de escrever


    Scenario: Interagir com artigos
    Given que desejo interagir com o artigo de alguém
    When eu estiver no feed global e clicar em um artigo de meu interesse
    And estiver dentro da linha do tempo da pessoa que publicou o artigo
    Then devo conseguir interagir comentando ou curtindo qualquer artigo dessa pessoa

    Scenario: Verificar se o artigo foi curtido
    Given que eu curti o artigo de algum usuario
    When eu entrar no meu menu de artigos favoritos
    Then eu verei o artigo recém curtido no menu

    Scenario: Editar meu perfil
    Given que eu desejo alterar alguma informação no meu perfil
    When eu entrar no meu perfil para edição
    And adicionar uma foto ou biografia
    Then devo conseguir salvar com as novas informações adicionadas

    Scenario: Visualizar artigos por tag
    Given que desejo visualizar artigos por uma tag
    When eu clicar em uma tag no feed global
    Then verei apenas artigos publicados com aquela tag


    Scenario: Visualizar outra página de artigos
    Given que estou no feed global de artigos e quero ver outra página
    When eu clicar em um número no fim da página
    Then devo visualizar a página de artigos respectiva àquele número
    

