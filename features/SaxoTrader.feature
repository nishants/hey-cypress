Feature: Demo acount
  As a user, I should be able to login using demo account and explore supported app features.

  @focus
  Scenario: User logs in on desktop
    Given I login as a demo user
    Then I can see trading workspace