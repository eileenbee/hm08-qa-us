module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumber: '#number',
    cardCode: '.card-second-row #code',
    messageField: '#comment',
    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    linkCardButton: 'button=Link',
    closePaymentMethodModalButton: '.payment-picker .close-button',
    selectSupportivePlan: 'div=Supportive',
    slideSwitch: '.slider',
    iceCreamPlusButton: '.counter-plus',
    enterButton: '.smart-button',
    // Modals
    phoneNumberModal: '.modal',
    // Misc
    cardSignatureStrip: '.plc',
    cardPaymentMethodIcon: 'img[alt="card"]',
    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },
    addPaymentMethodCard: async function() {
            // Adding a payment card
            const paymentMethodButton = await $(this.paymentMethodButton);
            await paymentMethodButton.waitForDisplayed();
            await paymentMethodButton.click();
    
            const addCardButton = await $(this.addCardButton);
            await addCardButton.waitForDisplayed();
            await addCardButton.click();
    
            const cardNumber = await $(this.cardNumber);
            await cardNumber.waitForDisplayed();
            await cardNumber.setValue(1234567812345678);
            const cardCode = await $(this.cardCode);
            await cardCode.waitForDisplayed();
            await cardCode.setValue(55);
    
            const cardSignatureStrip = await $(this.cardSignatureStrip);
            await cardSignatureStrip.waitForDisplayed();
            await cardSignatureStrip.click();
    
            const linkCardButton = await $(this.linkCardButton);
            await linkCardButton.waitForDisplayed();
            await linkCardButton.click();
    
            const closePaymentMethodModalButton = await $(this.closePaymentMethodModalButton);
            await closePaymentMethodModalButton.waitForDisplayed();
            await closePaymentMethodModalButton.click();

    },
    // Write a message to the driver...
    fillMessage: async function() {
        const messageField = await $(this.messageField);
        await messageField.waitForDisplayed();
        await messageField.setValue('Get some whiskey');
    },
    // Slide Blanket and handkerchiefs button
    clickRadioButton: async function() {
        const slideSwitch = await $(this.slideSwitch);
        await slideSwitch.click();
    },
    // 2 orders of ice cream
    clickIceCreamPlusbutton: async function() {
        const iceCreamPlusButton = await $(this.iceCreamPlusButton);
        await iceCreamPlusButton.waitForDisplayed();
        await iceCreamPlusButton.click();
        await iceCreamPlusButton.click();
    },
    // Car search modal appears 
    clickEnterButton: async function() {
        const enterButton = await $(this.enterButton);
        await enterButton.waitForDisplayed();
        await enterButton.click();
        await enterButton.click();
    }

};