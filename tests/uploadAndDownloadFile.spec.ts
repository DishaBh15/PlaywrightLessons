import {test,expect} from '@playwright/test'


test('upload a file', async({page}) => {

await page.goto('https://the-internet.herokuapp.com/upload');


await page.locator('#file-upload').setInputFiles('./Files/uploadedFile.txt');

await page.locator('#file-submit').click();

await expect(page.locator('#uploaded-files')).toHaveText('uploadedFile.txt');

});


//https://the-internet.herokuapp.com/upload