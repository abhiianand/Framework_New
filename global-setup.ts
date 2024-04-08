import { Browser , chromium, expect, Page } from "@playwright/test";


async function globalSetup()
{
    let browser: Browser = await chromium.launch({headless: false})
    let context= await browser.newContext()
    let page: Page=await context.newPage()

    await page.goto("https://demoblaze.com/");
    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("test");
    await page.locator("#loginpassword").fill("test");
    await page.locator('[onclick="logIn()"]').click();
    await expect(page.locator("#logout2")).toBeVisible();

    //Save the state after login

    await page.context().storageState({path: "./LoginAuth.json"})

    await browser.close()

}
export default globalSetup;