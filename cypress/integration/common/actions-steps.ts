/// <reference types="cypress"/> 
import { Given } from "cypress-cucumber-preprocessor/steps"

Given('I visit cypress blog page', () => {
  cy.visit(Cypress.config('baseUrl'));
});

Given('I search for term {string} in blogs and click on {string}', (input: string, blog: string) => {
  cy.get('#search-input').type(input);
  cy.get('.searchValues').contains(blog).click();
});

Given('blog should be open and page title should be {string}', (title: string) => {
  cy.get('.posttitle_purus').should('have.text', title);
});