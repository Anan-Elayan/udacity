describe("Form Tests", () => {
  beforeEach(() => {
      cy.visit("http://localhost:1234");
  });

  it("Successfully creates a set", () => {
      cy.get("#set-name").type("My Flashcard Set");
      cy.get("#create-set-form").submit();
      cy.on("window:alert", (txt) => {
          expect(txt).to.contains("Set created: My Flashcard Set");
      });
  });

  it("Fails to create a set with an empty input", () => {
      cy.get("#create-set-form").submit();
      cy.get("#set-error").should("be.visible");
  });

  it("Successfully adds a card", () => {
      cy.get("#card-content").type("New Card Content");
      cy.get("#add-card-form").submit();
      cy.on("window:alert", (txt) => {
          expect(txt).to.contains("Card added: New Card Content");
      });
  });

  it("Fails to add a card with an empty input", () => {
      cy.get("#add-card-form").submit();
      cy.get("#card-error").should("be.visible");
  });
});
