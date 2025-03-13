
describe("Navigation Tests", () => {
  beforeEach(() => {
      cy.visit("http://localhost:1234");
  });

  it("Navigates to Home page", () => {
      cy.get("#nav-home").click();
      cy.get("#home-section").should("be.visible");
  });

  it("Navigates to Card Set page", () => {
      cy.get("#nav-card-set").click();
      cy.get("#card-set-section").should("be.visible");
  });

  it("Navigates to About page", () => {
      cy.get("#nav-about").click();
      cy.get("#about-section").should("be.visible");
  });
});
