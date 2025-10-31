describe("Tasks Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/tasks");
    cy.contains("Tasks").should("be.visible");
  });

  // test tasks table
  it("displays the tasks table and shows all 6 tasks", () => {
    cy.get(".task-table").should("exist");
    // Use tbody rows to avoid counting header rows
    cy.get(".task-table tbody tr").should("have.length", 6);
  });

  // test filter function
  it("filters tasks by done status", () => {
    // Ensure all tasks are visible before filtering
    cy.get(".task-table tbody tr").should("have.length", 6);

    // Apply the filter: Done
    cy.get("select.filter-select").select("done");

    // After filtering, every visible row should contain "done"
    cy.get(".task-table tbody tr").each(($row) => {
      cy.wrap($row).contains("done");
    });
  });

  it("filters tasks by pending status", () => {
    // Ensure all tasks are visible before filtering
    cy.get(".task-table tbody tr").should("have.length", 6);

    // Apply the filter: Pending
    cy.get("select.filter-select").select("pending");

    // Each visible row should contain "pending"
    cy.get(".task-table tbody tr").each(($row) => {
      cy.wrap($row).contains("pending");
    });
  });
});
