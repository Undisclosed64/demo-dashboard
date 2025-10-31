describe("App Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });
  //application loads
  it("the application loads successfully", () => {
    cy.contains("Dashboard").should("be.visible");
  });

  //navigation links work and correctly render each page
  it("navigates between pages using the sidebar", () => {
    // Dashboard
    cy.contains("Dashboard").should("be.visible");

    // Tasks
    cy.get("nav").contains("Tasks").click();
    cy.url().should("include", "/tasks");
    cy.contains("Tasks").should("be.visible");
    cy.get("table").should("exist");

    // Alerts
    cy.get("nav").contains("Alerts").click();
    cy.url().should("include", "/alerts");
    cy.contains("This page is yet to be implemented").should("be.visible");

    // Settings
    cy.get("nav").contains("Settings").click();
    cy.url().should("include", "/settings");
    cy.contains("This page is yet to be implemented").should("be.visible");
  });
});
cy.contains("Tasks");
