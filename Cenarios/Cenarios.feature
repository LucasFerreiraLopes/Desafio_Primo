Feature: Testes E2E da Aplicação Conduit

    Realiza o cadastro e o login na aplicação,
    faz as devidas asserções dos principais elementos,
    realizar um post na aplicação e fazer uma interação.

    Scenario: Realizar o Cadastro
    Given Não possuir cadastro
    Then Visitar a aplicação
    When Estiver na página principal
    Then Validar elementos fixos da página
    And Clicar no botão (sign up) e realizar o cadastro


    Scenario: Realizar o Login
    Given Não estou logado na aplicação
    Then Clicar em Sign In
    When Estiver na página de login
    Then Preencher os meus dados e realizar o login

    Scenario: Publicar um Artigo
    Given Estou logado na página editor
    Then Preencher todos os campos do artigo
    When Tudo estiver preenchido, clicar no botão submit
    And Visualizar meu artigo e comenta-lo
