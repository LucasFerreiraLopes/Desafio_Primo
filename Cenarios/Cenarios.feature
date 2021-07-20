Feature: Aplicação Conduit

    Aplicação consiste em ser uma rede social para publicação de artigos


    Scenario: Acessar a aplicação e visualizar o feed global
    Given que desejo entrar no site
    When estiver na pagina principal
    Then devo visualizar o feed global

    Scenario: Realizar Cadastro no site
    Given que não possuo um cadastro
    When eu estiver na pagina de cadastro
    And preencher todos os dados 
    Then estarei logado no sistema com minha nova conta


    Scenario: Realizar Login no site
    Given que estou no site mas não estou logado
    When eu estiver na pagina de login
    And preencher os campos com os dados da minha conta
    Then estarei logado no sistema com a minha conta informada

    Scenario: Publicar um Artigo
    Given que estou na pagina principal e desejo publicar um artigo
    When  eu estiver na página de criar artigo
    And preencher o artigo com as informações necessárias
    Then devo publicar e visualizar o artigo que acabei de escrever
