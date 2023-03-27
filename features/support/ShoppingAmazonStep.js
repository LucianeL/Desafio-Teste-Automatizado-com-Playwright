
const { Given, When, Then } = require('@cucumber/cucumber')
const { AmazonPage } = require('./pages/amazon.page')

const amazonPage = new AmazonPage();


Given('Que eu acesse a pagina da Amazon', async () => {
  await amazonPage.acessarPagAmazon();
});

When(/^Pesquiso pelo livro "([^"]*)"$/, async function (produtoString) {
  await amazonPage.pesquisarProduto(produtoString);
});

When(/^E adiciono "([^"]*)" ao carrinho de compras$/, async function (produtoString) {
  await amazonPage.adicionarProduto(produtoString)

});

When(/^Verifico se produto "([^"]*)" foi adicionado ao carrinho$/, async (args1) => {
  await amazonPage.irParaCarrinho()
  await amazonPage.verificarAdicao(args1)

});

When(/^Eu clico no botao de exclusao do item$/, async () => {
  await amazonPage.deleteProduto()
});

Then('O item é removido do carrinho de compras', async function () {
  await amazonPage.checaDelete()
})


