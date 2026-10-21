import {test, expect} from '../Fixtures/loginfixture'

test('Validate PageTitle', async ({page})=>{
    
    // we will go explicitly to the logged in page because 
    //we only got the stored logged in state but 
    //we have to go to the logged in page here.
    await page.goto('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.getByText('Sauce Labs Backpack').click();
    await page.waitForTimeout(5000);
})

test('Add Cart', async ({page})=>{

    await page.goto('https://www.saucedemo.com/inventory.html')
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(5000);
})