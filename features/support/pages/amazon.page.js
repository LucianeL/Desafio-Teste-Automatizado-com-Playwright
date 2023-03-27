//const chai = require("chai");
const { expect } = require("chai");

class AmazonPage {

    async acessarPagAmazon() {
        await page.goto('https://www.amazon.com.br/');
    }
    async pesquisarProduto(produto) {
        var barraPesquisa = await page.waitForSelector('[id=twotabsearchtextbox]')
        await barraPesquisa.click()
        await barraPesquisa.fill(produto)
        await page.click('[id=nav-search-submit-button]');
    }
    async adicionarProduto(produto) {
        await page.waitForSelector('//*[text()="' + produto + '"]', { visible: true })
        await page.click('//*[text()="' + produto + '"]')
        var tituloProduto = await page.waitForSelector('span[id=productTitle]')
        var textoTitulo = await tituloProduto.textContent();
        var adicionarCarrinho = await page.waitForSelector('#add-to-cart-button')
        await adicionarCarrinho.press('Enter');
        expect(textoTitulo).to.be.contains(produto);
    }

    irParaCarrinho = async function () {
        await page.goto('https://www.amazon.com.br/gp/cart/view.html?ref_=nav_cart');
    };

    verificarAdicao = async function (produto) {
        var produtoAdicionado = await page.waitForSelector('[class="a-truncate-cut"]', `//*[text()="${produto}"]`)
        produtoAdicionado = await produtoAdicionado.textContent(produto)
        expect(produtoAdicionado).to.be.equal(produto)
    };

    async deleteProduto() {
        var excluirProduto = await page.waitForSelector('[name*="submit.delete"]')
        await excluirProduto.click();
    };

    async checaDelete() {   
        var textTela = await page.waitForSelector('[class="a-spacing-mini a-spacing-top-base"]')
        textTela = await textTela.textContent("\nSeu carrinho de compras da Amazon está vazio.\n")
        expect(textTela).to.be.equal("\nSeu carrinho de compras da Amazon está vazio.\n")
    
    };
}
module.exports = { AmazonPage: AmazonPage };