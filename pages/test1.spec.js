import {test ,expect} from '@playwright/test';

let context;
let page;
let browser;

const {chromium}= require('@playwright/test');
test("Basic Test @new",async({page})=>{
    // browser=await chromium.launch({headless:false});
    // context= await browser.newContext();
    // page=await context.newPage();
    
   await page.goto("https://demoblaze.com/");
    // await page.locator("#login2").click();
    // await page.locator("#loginusername").fill("test");
    // await page.locator("#loginpassword").fill("test");
    // await page.locator('[onclick="logIn()"]').click();
   await expect(page.locator("#logout2")).toBeVisible({timeout: 10000});
})
test("Basic Test 2",async({page})=>{
    await page.goto("https://demoblaze.com/");
    await expect(page.locator("#logout2")).toBeVisible({timeout: 10000});


 })