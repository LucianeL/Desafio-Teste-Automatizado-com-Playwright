const {BeforeAll, Before, AfterAll, After} = require ('@cucumber/cucumber')
const { chromium } = require('playwright');
const fs = require ('fs')
var path = require('path');
let moonHost = '';


BeforeAll(async() =>{
        if (moonHost){
                console.log(moonHost)
                global.browser = await chromium.connect({
                timeout: 0,
                wsEndpoint: 'ws://'+moonHost+':4444/playwright/chromium',
                headless:false
            });
        }
        else{
            console.log(moonHost)  
            global.browser = await chromium.launch({headless: false});
        }
});

AfterAll(async() => {
     await global.browser.close();
});


Before(async() =>{
    global.context = await global.browser.newContext({
        
    });
    global.page = await global.context.newPage();
});

After(async() => {
    await global.page.close();
    //global.context.close();
}); 