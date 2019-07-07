const stubbedGetRequest = {
  "postId": 1,
  "id": 1,
  "name": "lore-ipsum",
  "email": "nishant@cypress-hello.com",
  "body": "A comment from stubbed data"
};

describe('Network Requests', () => {
  beforeEach(() =>  {
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.server();
  });

  it('capture ajax calls', () => {
    cy.route({
      method: 'GET',
      url: 'https://jsonplaceholder.cypress.io/comments/1',
      response: stubbedGetRequest
    });

    cy.get('button').contains('Get Comment').click();
    cy.get('.network-comment').contains(stubbedGetRequest.body).should('exist')
  });

  it('should stub based on fixture in file', () => {
    cy.visit('https://example.cypress.io/commands/network-requests');
    cy.server();

    cy.route({
      method: 'GET',
      url: 'https://jsonplaceholder.cypress.io/comments/1',
      response: 'fixture:comments/get-comment-data.json'
    });

    cy.get('button').contains('Get Comment').click();
    cy.get('.network-comment').contains('fixture from file path').should('exist')
  });

});