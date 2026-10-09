const TEXTO_FINAL = 'Hello World!';

const iniciarCarregamento = () => {
  cy.get('#start button').click();
};

const esperarLoaderSumir = () => {
  cy.get('#loading', { timeout: 20000 }).should('not.be.visible');
};

describe('Carregamento dinâmico | exemplo 1', () => {
  it('mostra "Hello World!" depois que o loader some', () => {
    cy.visit('/dynamic_loading/1');

    iniciarCarregamento();
    cy.get('#loading').should('be.visible');

    esperarLoaderSumir();

    cy.get('#finish h4')
      .should('be.visible')
      .and('have.text', TEXTO_FINAL);
  });
});
