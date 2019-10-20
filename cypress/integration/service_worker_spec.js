describe('Test pages offline with service worker', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081');
  });

  it('test-one', () => {
    cy.contains('Photo blog').should('exist');
    cy.contains('Horses in a field').click();
  });

  it('test-two', () => {
    cy.contains('Photo blog').should('exist');
    cy.contains('Horses in a field').click();
  });
  it('test-three', () => {
    cy.contains('Photo blog').should('exist');
    cy.contains('Horses in a field').click();
  });
});
