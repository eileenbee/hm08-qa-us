# 1. Sprint 8 Project: 
-Write tests to check the functionality of Urban Routes app.

# 2. Sofware and Documentation source: 
-Chrome
-Visual Studio Code
-Git Bash
-WebdriverIO

# 3. Configuration: 

-Clone the repo into GitBash using the following: git clone (url)
-Initialize by typing the following into GitBash: npm install
-Start server from project page and copy the server address
-Add the server URL to the wdio.config.js file setting base Url
-Run all tests: npm run wdio

# 4. Running the Tests:
-In VS code use the template provided in the createAnOrder.e2e.js file.
-Create tests cases for: setting an address, selecting the supportive plan, filling in the phone number, adding a credit card, writing a message for the driver, ordering a blanket and handkerchiefs, ordering 2 ice creams, and the car search modal.
-Provide a title for each test.
-Use the page.js module file to organize and maintain your code.
-Find elements in your UI by using DevTools and add missing locators to your Inputs, Buttons, and Modals.
-Create Functions for the test cases to reduce repetitive code.
-Use the expect command and "matcher" to compare actual and expected results.
-Save your tests before running the tests.
-When you're ready to run the tests use the command npm run wdio.
-Check if the tests passed or failed and what the expected and received results are supposed to be.

# 5. Test Cases:
-Setting the address - PASSED
-Selecting Suppportive plan - PASSED
-Adding the phone number - PASSED
-Write message to the driver - PASSED
-Ording a blanket and handercheifs - PASSED
-Ordering 2 icecreams - PASSED
-Car search modal appears - PASSED


