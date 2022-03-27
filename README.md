# cypress-cucumber-typescript
Cypress Automation framework for Typescript based apps using BDD-Gherkin style (Cucumber) 

## Install
```
npm install
```
## Execute Tests
Run the Cypress Tests in headmode
```
npm run cypress-open
```
Or

Run the Cypress Test in headless mode
```
npm run cypress-run
```
## Test Reports
Test Report: Once all the tests are executed you could generate the test reports locally or using Cypress Dashboard
### Cucumber Test Report
```
npm run cypress-report
```
### Cypress Dashboard Report
Configure cypress dashboard in your test using below steps
- Go to [Cypress Dashboard](https://dashboard.cypress.io/login) & create account 
- Create a new project
- Copy the generated Project Id & Project key
- Configure the Project Id in cypress.json file
![image](https://user-images.githubusercontent.com/41230361/160297121-c27b0175-9983-4737-a46e-b5b3701961f7.png)
- Configure the Project key in package.json file
![image](https://user-images.githubusercontent.com/41230361/160297198-26444363-2721-44a6-8438-a421281c5d50.png)
