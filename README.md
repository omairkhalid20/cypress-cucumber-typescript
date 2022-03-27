# cypress-cucumber-typescript
Cypress Automation framework for Typescript based apps using BDD-Gherkin style (Cucumber) 

## Purpose of the project
Cypress awesomness and its power can be enhanced if it is integerated with BDD (Cucumber) so that the tests can be written in natural language and test definitions can be written in Typescript. This project combines a lot of different features into single one repo with basic executable tests to demonstrate how **Cypress + Angular(Typescript) + Cucumber** works hand in hand.

### Why cypress with BDD Framework
Cypress automation tests can be written directly in Typescript or Javascript, but integerating it with BDD gives us a **"seperation of concern"** ability. This means that the automation tests (business usecases) **will not be changed and impacted** at all by the underlying automation framework (cypress / protractor e.t.c).

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
