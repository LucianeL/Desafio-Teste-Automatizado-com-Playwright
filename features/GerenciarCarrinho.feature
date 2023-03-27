
Feature: Gerenciar carrinho de compras 
    Eu, enquanto usuário, desejo gerenciar o carrinho e compras da Amazon

Scenario: Adicionar e excluir produto do carrinho 
    Given Que eu acesse a pagina da Amazon
    When Pesquiso pelo livro "1984 - Edição de Luxo"
    And E adiciono "1984 - Edição de Luxo" ao carrinho de compras
    And Verifico se produto "1984 - Edição de Luxo" foi adicionado ao carrinho
    And Eu clico no botao de exclusao do item
    Then O item é removido do carrinho de compras
