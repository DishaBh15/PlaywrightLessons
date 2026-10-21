import {test, expect} from '@playwright/test';


test('Browser Context test', async({browser}) =>{

const adminContext = await browser.newContext({

    permissions: ['notifications']
});

const customerContext = await browser.newContext({

    permissions: ['notifications']
});

const adminPage = await adminContext.newPage();

const customerPage = await customerContext.newPage();

  // Open separate applications
  await adminPage.goto('https://admin-demo.nopcommerce.com/login');
  await customerPage.goto('https://demo.nopcommerce.com/');

  await expect(adminPage.locator('input')).toHaveCount(4);

  await expect(customerPage).toHaveTitle('/nopCommerce/i');

  await adminContext.close();

   await customerContext.close();
});