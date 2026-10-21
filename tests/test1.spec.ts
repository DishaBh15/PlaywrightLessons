import {test, expect} from '@playwright/test'

test('CheckTitle' , async ({page})=>{

    await  page.goto('https://www.saucedemo.com/');

    //Validation if title of the page is 'Swag Labs'
    await expect(page).toHaveTitle(/Swag Labs/);

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

    await  page.waitForTimeout(5000);

})

test('test 2', async ({page})=>{

   await page.goto("https://www.selenium.dev/");

   await expect(page).toHaveTitle("Selenium");

   //cat use await in the below line.
    const logo =  page.locator("img[alt='BrowserStack']");

    await logo.click();

    await page.waitForTimeout(4000);


})

test('test 3', async ({page})=>{

   await page.goto("https://www.selenium.dev/");

   await expect(page).toHaveTitle("Selenium");

   //cat use await in the below line.
    const logo =  page.locator("img[title='Applitools']");

    await logo.click();

    await page.waitForTimeout(4000);


})