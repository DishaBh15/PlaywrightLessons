import {test, expect} from '@playwright/test'

test('drop down test' , async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //dialog is an event that occurs when an alert appears. 
    //We listen to that event by using page.on('dialog')
     page.on('dialog' , async dialog =>{

        console.log(await dialog.type());        
        console.log(await dialog.message());
        await dialog.accept();
    })
   
      await page.getByText('Simple Alert').click();
      await page.getByText('Confirmation Alert').click();

      await page.getByPlaceholder('Enter Name').fill('amit');
    
    
    

    await page.waitForTimeout(5000);

})