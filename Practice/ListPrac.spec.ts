import {test, expect} from '@playwright/test'


test('My list', async ({ page}) => {

    await page.goto('https://www.amazon.in/');

    await page.locator('a[data-csa-c-content-id="nav_cs_electronics"]').click();

    const items =  await page.locator('//ul[@aria-labelledby="n-title"]/li');

    console.log(await items.count());

   await expect(items.nth(0)).toHaveText('Electronics');

   console.log(await items.nth(1).innerText());

   console.log(await items.last().innerText());

   console.log(await items.allTextContents());

   //This checks that exactly one matching list item contains Tablets.

   await expect(items.filter({hasText:  'Tablets'})).toHaveCount(1);

   const count = await items.count();

   for(let i=0; i< count; i++){

     console.log(await items.nth(i).innerText());
   }
});

