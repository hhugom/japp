describe('Home screen', () => {
  it('works', () => {
    cy.visit('/');
    cy.contains('Connexion').should('be.visible');
  });
});
