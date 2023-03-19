/// <reference types="cypress"/> 
import { Given, Before, After } from "cypress-cucumber-preprocessor/steps"

After(() => {
 // cy.delete("Learn cucumber");
});

Before({ tags: "@this" }, () => {
 cy.visit("/commands/querying");
});

Given('I am on the homepage', () => {
  cy.visit('/todo')
});

Given('I type {string} in input field', (newTask: string) => {
  cy.get('[data-test="new-todo"]').type(newTask + '{enter}');
})

Given('I type following input fields', (datatable) => {
  const hashes = datatable.hashes();
  for (let i = 0; i < hashes.length; i++) {
    const data = hashes[i];
    cy.get('[data-test="new-todo"]').type(data.list + '{enter}');
  }
});

Given('I should see a new todo {string}', (assertion: string)=> {
  cy.get('.todo-list li').last().should('have.text', assertion);
});

Given('I should see the {string}', (assertion: string)=> {
  cy.get('.todo-list li').last().should('have.text', assertion);
});


Given('I get the input from the fixture file', ()=> {
  cy.fixture('example.json').then((input) => {
    // Use the data from the fixture in your test
    cy.get('[data-test="new-todo"]').type(input.newtodo + '{enter}');
  })
});

