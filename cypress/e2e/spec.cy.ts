describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Prueba técnica')
  })
});

describe('Tests e2e', () => {
  it('should contain Acceder in class form-button', () => {
    cy.visit('/')
    cy.get('.form-button').contains('Acceder')
  })

  it('should have four row elements inside the loginForm', () => {
    cy.visit('/')
    cy.get(".loginForm div.row")
      .its('length')
      .should("eq", 4);
  })

  it('should contain Email and Contraseña in the id input placeholder', () => {
    cy.visit('/')
    cy.get('#form-group').within(() => {
    cy.get('input#form-input-email').should('have.attr', 'placeholder', 'Email')
    cy.get('input#form-input-password').should('have.attr', 'placeholder', 'Contraseña')
    })
  })

  it('is submitted when valid', () => {
    cy.visit('/')
    let submitted: boolean
    cy.get('.loginForm').invoke('submit', (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      submitted = true
  })
  cy.get('.loginForm').within(() => {
    cy.get('input#form-input-email').type("test@gmail.com");
    cy.get('input#form-input-password').type("12345");
    cy.get('.form-button').click()
  })
    .then(() => {
      expect(submitted, 'form submitted').to.be.true
    })
  })

})
