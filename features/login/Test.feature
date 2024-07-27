Feature: Launch

@launch
Scenario: Open Website

    Given I open Playwright website
    When I click on the Get Started link
    Then I should see the Installation heading