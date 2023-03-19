@e2e
Feature: Todo list feature

Background: Background name
 Given I am on the homepage

  @this
  Scenario: Add a new todo item
    When I type "learn XYZ cucumber" in input field
    When I type "learn XYZ cypress" in input field
    When I type "learn cypress" in input field
    When I type following input fields
      | list             |
      | Learn cucumber   |
      | Learn cypress    |
      | Learn typescript |
    Then I should see a new todo "learn cucumber"

  @sanity
  Scenario Outline: Add a new todo item
    When I type following input fields
      | list      |
      | <newtodo> |
    Then I should see the "<result>"
    Examples:
      | newtodo        | result         |
      | Learn cypress  | Learn cypress  |
      | Learn cucumber | Learn cucumber |