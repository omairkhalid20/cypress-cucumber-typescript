// ***********************************************************
// This example is for those who do not want to use
// cypress with bdd
//
// ***********************************************************
beforeEach(() => {
  cy.visit('https://example.cypress.io/todo')
})

describe('Queriying Elements', () => {
  it('Ussing CSS selectors tag name, class, ID, attributes', () => {
    cy.get('header.header h1').should('have.text', 'todos')
  })

  it('Using data attributes', () => {
    cy.get('[data-test="new-todo"]')
  })

  it('Using Cypress-specific selectors', () => {
    cy.get('.filters > :nth-child(2) > a').click();
  })

  it('Using Chain Commands', () => {
    cy.get('label').contains('Walk the dog').parents('.view').find('button').invoke('show').click();
  })
})

describe('Adding a new item to todo list',()=>{
  it('First Test Case', () => {
    //Simple Type
    cy.get('[data-test="new-todo"]').type('Trying custom commands');

    //Remove
    cy.get('[data-test="new-todo"]').clear();

    //Simple Type + Action
    cy.get('[data-test="new-todo"]').type('Samia Saleem{enter}');

    // //Assertion
    cy.get('.todo-list li').last().should('have.text', 'Samia Saleem');

    // //Custom Command
    cy.clickOnCross('Samia Saleem');
  })
})