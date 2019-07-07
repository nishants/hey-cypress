describe('Selectors and assertions', () => {
  beforeEach(() => {
    cy.visit('http://blazedemo.com/');
  });
  it('lest open a url', () => {
    cy.contains('destination of the week! The Beach!').click();
    cy.url().should('include', 'vacation.html');
    cy.get('.img-rounded').invoke('attr', 'src').should('include', 'assets/vacation.jpg');
    cy.contains('Destination of the week: Hawaii !').should('exist');
    cy.get('.brand').first().click();
    cy.get('[name="fromPort"]').select('Mexico City');
    cy.get('[name="toPort"]').select('New York');
    cy.get('input[value="Find Flights"]').click();
    cy.contains('Flights from Mexico City to New York:').should('exist');
    cy.get('td').contains('Lufthansa').parent().find('input[type="submit"]').as("bookThisFlight");
    cy.get("@bookThisFlight").invoke('attr', 'value').should('include', 'Choose This Flight');
    cy.get("@bookThisFlight").click();
  });
});