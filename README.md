# cypress-cucumber-typescript
Cypress Automation framework for Typescript based apps using BDD-Gherkin style (Cucumber) 

## Purpose of the project
Cypress awesomness and its power can be enhanced if it is integerated with BDD (Cucumber) so that the tests can be written in natural language and test definitions can be written in Typescript. This project combines a lot of different features into single one repo with basic executable tests to demonstrate how **Cypress + Angular (Typescript) + Cucumber** works hand in hand.

### Why cypress with BDD Framework
Cypress automation tests can be written directly in Typescript or Javascript, but integerating it with BDD gives us a **"seperation of concern"** ability. This means that the automation tests (business usecases) **will not be changed and impacted** at all by the underlying automation framework (Cypress/Protractor e.t.c). This project also provides buisness oriented reporting of tests in natural language that can be understood by different stakeholders (Devs + QAs + Buisness Persons).

## Versions
- Angular: 13.3.0
- Node: 16.10.0
- Cypress: 9.5.2
- Cucumber Version: 4.3.1

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
This project provides three different types of reporting features.
- Command line output
- HTML Reporting using Cucumber
- Cypress Dashboard Reporting

### Command line output
When tests are executed simply using "npm run cypress-run", the command line prints the following output after the successfull execution of tests.

![160298061-917d7b2a-6bec-4d8d-80f0-8a9568341870](https://user-images.githubusercontent.com/41230361/160299125-80d2c0da-1290-4fc3-bae1-44ee000edd34.jpg)

### Cucumber HTML Test Report
```
npm run cypress-report
```

An HTML report is generated in the cypress/reports directory that gives the following output. 

![160298099-eb8ff357-3f09-4d60-ab86-9623c555be4a](https://user-images.githubusercontent.com/41230361/160299164-d87f95a8-750e-4d87-9021-67a91216b60b.jpg)

Report is generated using JSON + HTML and it is very useful if we want to integerate our project test results output with any system (e.g: configure the test with CI tool and generate the report using pipeline and email it to the user).

### Cypress Dashboard Report
Configure Cypress Dashboard with your project using instructions below.

- Go to [Cypress Dashboard](https://dashboard.cypress.io/login) & create account 
- Create a new project
- Copy the generated Project Id & Project key
- Configure the Project Id in cypress.json
  
  ![160297121-c27b0175-9983-4737-a46e-b5b3701961f7](https://user-images.githubusercontent.com/41230361/160299025-c95793d9-124d-405d-a01a-dbdbb0115ce7.jpg)

- Configure the Project key in package.json
  
  ![160297198-26444363-2721-44a6-8438-a421281c5d50](https://user-images.githubusercontent.com/41230361/160299050-af4441bb-bfcf-4698-9b97-1762f05bfe62.jpg)

Execute tests on Cypress Dashboard using
```
npm run cypress-dashboard
```
