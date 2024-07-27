Feature: Launch

Background:

    Given I open the Playwright website

@test
Scenario: Open Website

    When I click on the Get Started link
    Then I should see the Installation heading