const baseUrl = 'https://www.saxotrader.com';

export const login = ({user, password}) => {
  cy.visit(baseUrl);
  cy.get('#login_sim').click();
  cy.get('#field_userid').type(user);
  cy.get('#field_password').type(password);
  cy.get('#button_login').click();
};
