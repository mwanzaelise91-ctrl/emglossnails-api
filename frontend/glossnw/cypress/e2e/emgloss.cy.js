describe('Emgloss Nails E2E Tests', () => {

  it('Signup - rejects mismatched passwords', () => {
    cy.visit('/signup');

    cy.get('input[name="firstName"]')
      .type('Cypress');

    cy.get('input[name="lastName"]')
      .type('Tester');

    cy.get('input[name="email"]')
      .type(`test${Date.now()}@test.com`);

    cy.get('input[name="password"]')
      .type('Test12345!');

    cy.get('input[name="confirmPassword"]')
      .type('Wrong12345!');

    cy.get('button.signup-button')
      .click();

    cy.get('.signup-error')
      .should('be.visible')
      .and('contain', 'Passwords do not match.');
  });


  it('Signup - creates a new account', () => {
    const email = `cypress${Date.now()}@test.com`;

    cy.visit('/signup');

    cy.get('input[name="firstName"]')
      .type('Cypress');

    cy.get('input[name="lastName"]')
      .type('Tester');


    cy.get('input[name="email"]')
      .type(email);

    cy.get('input[name="password"]')
      .type('Test12345!');

    cy.get('input[name="confirmPassword"]')
      .type('Test12345!');

    cy.on('window:alert', (text) => {
      expect(text).to.contain('Account created successfully!');
    });

    cy.get('button.signup-button')
      .click();

    cy.url()
      .should('include', '/login');
  });

});

