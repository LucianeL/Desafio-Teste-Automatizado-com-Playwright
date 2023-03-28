//const chai = require("chai");
const { expect } = require("chai");

class AmazonPage {

    async acessarPagAmazon() {
        await page.setDefaultTimeout(10000);
        try {
            await page.goto('https://www.amazon.com.br/', { timeout: 10000 });
        } catch (erro) {
            console.log('Erro ao carregar página da Amazon: ', erro);
        }
    }

    async autenticar() {
        await page.setDefaultTimeout(10000);
        try{
        await page.goto('https://www.amazon.com.br/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com.br%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=brflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&', { timeout: 10000 });
            var insereLogin = await page.waitForSelector('[id="ap_email"]')
            await insereLogin.click()
            await insereLogin.fill("xxxxxxxx")
            await page.click('[class="a-button-input"]', { timeout: 5000 });
            var insereSenha = await page.waitForSelector('[id="ap_password"]')
            await insereSenha.click()
            await insereSenha.fill("xxxxxxxx")
            await page.click('[id="signInSubmit"]');
        }catch (erro) {
            console.log('Erro ao preencher login: ', erro);
        }
    }

    async pesquisarProduto(produto) {
        var barraPesquisa = await page.waitForSelector('[id=twotabsearchtextbox]')
        await barraPesquisa.click()
        await barraPesquisa.fill(produto)
        await page.click('[id=nav-search-submit-button]');
    }
    async adicionarProduto(produto) {
        try {
            await page.waitForSelector('//*[text()="' + produto + '"]', { visible: true })
            await page.click('//*[text()="' + produto + '"]')
            var tituloProduto = await page.waitForSelector('span[id=productTitle]')
            var textoTitulo = await tituloProduto.textContent();
            var adicionarCarrinho = await page.waitForSelector('#add-to-cart-button')
            await adicionarCarrinho.press('Enter');
            expect(textoTitulo).to.be.contains(produto);
        } catch (erro) {
            console.log(`Nenhum resultado encontrado para o produto: ${produto}`, erro);
        }
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
