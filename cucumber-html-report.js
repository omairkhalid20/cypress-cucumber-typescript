/**
 * Cypress HTML report configurations
 */
 const report = require("multiple-cucumber-html-reporter");
 report.generate({
     jsonDir: "./cypress/reports/cucumber-json/",
     reportPath: "./cypress/reports/",
     saveCollectedJSON: true,
     displayDuration: true,
     displayReportTime: true,
     pageTitle: 'Cypress Tests',
     reportName: 'Cypress+Typescript+Cucumber',
     pageFooter: 'Initial contributors: Samia & Umair',
     openReportInBrowser: true,
     customData: {
         title: 'Run info',
         data: [
             { label: 'Project', value: 'Dummy project' },
             { label: 'Test Framework', value: 'Cypress-Cucumber-Typescript' },
         ]
     }
 });