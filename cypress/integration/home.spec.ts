describe('Home screen', () => {
  it('works', () => {
    cy.visit('/');
    cy.contains('Login').should('be.visible');
  });
});
