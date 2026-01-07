// Top-level JSON import triggers the issue when using cypress.run()
import testData from '../../fixtures/environment.json';

describe('Test', () => {
  it('should work', () => {
    cy.visit('/');
  });
});

