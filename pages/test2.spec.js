import {test ,expect} from '@playwright/test';

let context;
let page;
let browser;

const {chromium}= require('@playwright/test');

test.use({storageState: "./NoAuth.json"})
test("Login with Admin User",async({page})=>{
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