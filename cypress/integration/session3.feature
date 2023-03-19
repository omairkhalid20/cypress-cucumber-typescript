@e2e
Feature: Todo list feature

Background: Background name
 Given I am on the homepage

  @this
  Scenario: Add a new todo item
    When I get the input from the fixture file
    Then I should see a new todo "Using fixtures to represent data"