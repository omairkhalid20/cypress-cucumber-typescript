@e2e
Feature: Example BDD Test for assertion of framework

  Scenario: Search something on cypress blog page
    Given I visit cypress blog page
    When I search for term "flaky" in blogs and click on 'Introducing Flaky Test Detection & Alerts'
    Then blog should be open and page title should be "Introducing Flaky Test Detection & Alerts"