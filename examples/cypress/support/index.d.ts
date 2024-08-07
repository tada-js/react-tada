declare namespace Cypress {
  interface Chainable<Subject = any> {
    getByCy(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
