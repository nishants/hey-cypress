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

  it('read table rows as text array', () => {
    cy.get('.brand').first().click();
    cy.get('[name="fromPort"]').select('Mexico City');
    cy.get('[name="toPort"]').select('New York');
    cy.get('input[value="Find Flights"]').click();

    const rowsToText = (...all) => all.map(a => a.innerText || a.textContent);
    const expectedRowText = ["Choose	Flight #	Airline	Departs: Mexico City	Arrives: New York	Price", "	43	Virgin America	1:43 AM	9:45 PM	$472.56", "	234	United Airlines	7:43 AM	10:45 PM	$432.98", "	9696	Aer Lingus	5:27 AM	8:22 PM	$200.98", "	12	Virgin America	11:23 AM	1:45 PM	$765.32", "	4346	Lufthansa	1:45 AM	8:34 PM	$233.98"];
    cy.get("tr").spread(rowsToText).should('deep.equal', expectedRowText)
  });

  it.only('read table row columns as array', () => {
    cy.get('.brand').first().click();
    cy.get('[name="fromPort"]').select('Mexico City');
    cy.get('[name="toPort"]').select('New York');
    cy.get('input[value="Find Flights"]').click();

    const rowsToText = (...all) => all.map(a => a.innerText || a.textContent);
    const flightNames = ["Virgin America", "United Airlines", "Aer Lingus", "Virgin America", "Lufthansa"];
    let flightNameSelector = "tbody > tr > :nth-child(4)";
    let nodesToText = (...all) => all.map(a => a.innerText);
    cy.get(flightNameSelector).spread(nodesToText).should('deep.equal', flightNames)
  });
});
