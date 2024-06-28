const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
        // Setting the address
    it('should call for the taxi driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const callATaxiButton = await $(page.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await expect(await $(callATaxiButton)).toBeExisting();
    }),  

        // Selecting the Supportive Plan
    it('should click on the Supportive Plan', async () => {  
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');  
        const selectSupportivePlan = await $(page.selectSupportivePlan);
        await selectSupportivePlan.waitForDisplayed();
        await selectSupportivePlan.click();
        await expect(await $(selectSupportivePlan)).toBeExisting();
    }),    

        // Adding the phone number
    it('should add a phone number', async () => {  
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');  
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    }),

        // Adding a credit card
    it('should add payment method', async () => {   
        await browser.url(`/`) 
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.addPaymentMethodCard();
        const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
        await cardPaymentMethodIcon.waitForDisplayed();
        await expect(await $(cardPaymentMethodIcon)).toBeExisting();
    }),

        // Adding a message to the driver
    it('should add a message to the driver', async () => {  
        await browser.url(`/`)  
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageField = await $(page.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Get some whiskey')
        await expect(await $(messageField)).toBeExisting();
    }),

        // Ordering a blanket and handkerchiefs
    it('should slide the radio button', async () => { 
        await browser.url(`/`)  
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St'); 
        const slideSwitch = await $(page.slideSwitch);
        await slideSwitch.click();
        await expect(await $(slideSwitch)).toBeExisting();
    }),

        // Ordering 2 orders of ice cream
    it('should click on the + button', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const iceCreamPlusButton = await $(page.iceCreamPlusButton);
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
        await expect(await $(iceCreamPlusButton)).toBeExisting();
    }),

        // Car search modal appears
    it('should click on the enter button', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const enterButton = await $(page.enterButton);
        await enterButton.waitForDisplayed();
        await enterButton.click();
        await expect(await $(enterButton)).toBeExisting();
    })
})