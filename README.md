# Desafio - Teste Automatizado de Interface com Playwright

Escopo: Crie um script usando Playwright para realizar testes automatizados no site da Amazon.

##### Ferramenta de teste utilizada:
 - [Playwright](https://playwright.dev/);
 - [NodeJs](https://nodejs.org/en);
 - [Cucumber](https://cucumber.io/)

 
 ##### Instalando Ferramentas
 - Baixar e instalar o NodeJs (de preferência a versão LTS com npm);
 - No Terminal: Rodar comando "npm init -y", para iniciar o projeto;
 - Instalar dependências npm:
    npm i @cucumber/cucumber
    npm i playwright;
 - Se preferir instalar através do Yarn:
    yarn add @cucumber/cucumber
    yarn add playwright

 ##### Executando:
 - Abrir a pasta do projeto no Visual Studio Code;
 - Abrir o Terminal (Ctrl + Shift + ' ou Menu: "Terminal>>New Terminal");
 - Rodar o comando "npm test".
 - Para rodar com o usuário autenticado, davor descomentar método "autenticar()", no Step "Given",  em: features/support/ShoppingAmazonStep.js.

 ##### 🤖 Exemplo de execução com sucesso:
 ![Code_5u4OoOgeEt](https://user-images.githubusercontent.com/69044228/228319805-3f48367d-f85a-4be8-af3f-a3086cfc4a19.gif)



 
