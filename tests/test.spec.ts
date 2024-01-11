import {test,expect} from '@playwright/test'

test('login url',async({page})=>{
    await page.goto('http://localhost:3000')

    page.click('#login')

    await expect(page).toHaveURL('http://localhost:3000/Login')
})

test('register url',async({page})=>{
    await page.goto('http://localhost:3000/Login')

    page.click('#register')

    await expect(page).toHaveURL('http://localhost:3000/Signup')
})

