import {test, expect} from '../Fixtures/loginfixture'

test('Validate PageTitle', async ({loggedinpage})=>{
    
    await expect(loggedinpage).toHaveURL('https://www.saucedemo.com/inventory.html');
    await loggedinpage.getByText('Sauce Labs Backpack').click();
    await loggedinpage.waitForTimeout(5000);
})

test('Add Cart', async ({loggedinpage})=>{
    
    await expect(loggedinpage).toHaveURL('https://www.saucedemo.com/inventory.html');
    await loggedinpage.locator('#add-to-cart-sauce-labs-backpack').click();
    await loggedinpage.waitForTimeout(5000);
})


// loggedinpage is the logged in page context that we get from the Fixture...So w dont use 
//our new page instance. Instead we use the passed loggged in page context
// to continue our work in test case. 
//Thats why page context or page parameter isnt used
//in the parameter