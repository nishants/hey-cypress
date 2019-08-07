
export const openTradingWorkspace = ()=> cy.get('.masthead-nav').contains('Trading').click();

export const openNewsAndSearch = ()=> cy.get('.masthead-nav').contains('News & Research').click();
export const openAccount = ()=> cy.get('.masthead-nav').contains('Account').click();