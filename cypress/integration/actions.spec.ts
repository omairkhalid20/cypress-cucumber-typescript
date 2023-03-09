// ***********************************************************
// This example is for those who do not want to use
// cypress with bdd
//
// ***********************************************************

describe('Main Block', () => {
  it('First Test Case', () => {
    cy.visit('https://example.cypress.io/todo')

    //Simple Type
    cy.get('[data-test="new-todo"]').type('Trying custom commands');

    //Remove
    cy.get('[data-test="new-todo"]').clear();

    //Simple Type + Action
    cy.get('[data-test="new-todo"]').type('Samia Saleem{enter}');

    //Assertion
    cy.get('.todo-list li').last().should('have.text', 'Samia Saleem');

    //Custom Command
    cy.delete('Samia Saleem');
  })
})