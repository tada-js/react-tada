describe('Counter Example', () => {
  beforeEach(() => {
    cy.visit('/counter');
  });

  // First Scenario
  // '페이지 진입하면 카운터 컴포넌트가 각 Provider 초기값을 가지고 실행된다.'
  it('Counter component should initialize with default values from each Provider when the page is loaded.', () => {
    cy.url().should('include', '/counter');

    cy.getByCy('counter-default').each(($counter) => {
      cy.wrap($counter).should('contain', '0');
    });

    cy.getByCy('counter-10').each(($counter) => {
      cy.wrap($counter).should('contain', '10');
    });

    cy.getByCy('counter-20').should('contain', '20');
  });

  // Second Scenario
  // '플러스 버튼을 누르면 count가 1 증가한다.'
  it('Counter component should initialize with default values from each Provider when the page is loaded.', () => {
    cy.url().should('include', '/counter');

    cy.getByCy('counter-default').each(($counter) => {
      cy.wrap($counter).should('contain', '0');
    });

    cy.getByCy('counter-10').each(($counter) => {
      cy.wrap($counter).should('contain', '10');
    });

    cy.getByCy('counter-20').should('contain', '20');
  });

  // Second Scenario
  // '플러스 버튼을 누르면 count가 1 증가한다.'
  it('Count should increase by 1 when the plus button is clicked.', () => {
    cy.getByCy('increment-button-0').click();

    cy.getByCy('counter-default').each(($counter) => {
      cy.wrap($counter).should('contain', '1');
    });

    cy.getByCy('increment-button-2').click();

    cy.getByCy('counter-10').each(($counter) => {
      cy.wrap($counter).should('contain', '11');
    });

    cy.getByCy('increment-button-4').click();

    cy.getByCy('counter-20').each(($counter) => {
      cy.wrap($counter).should('contain', '21');
    });
  });
});
