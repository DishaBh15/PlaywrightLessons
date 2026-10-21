import {test, expect} from '@playwright/test'

test.describe('HomePageTest' , ()=>{

    test('@Smoke HomePageTitleTest' ,  async ({page})=>{

        console.log("This is HomePageTitleTest")
           
    })

    test('HomePageHeadingTest' ,  async ({page})=>{

        console.log("This is HomePageHeadingTest")
           
    }) 

})

test.describe('LoginTest' , ()=>{

test('@Smoke ValidLoginTest' ,  async ({page})=>{

 console.log("This is ValidLoginTest")

})

test('@Regression InValidLoginTest' ,  async ({page})=>{

 console.log("This is InValidLoginTest")

})

})


//npx playwright test tests/testGroups.spec.ts --headed --project=chromium --grep "@Smoke"

//npx playwright test tests/testGroups.spec.ts --headed --project=chromium --grep "@Smoke | @Regression"  