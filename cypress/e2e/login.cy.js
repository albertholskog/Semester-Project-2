describe("Login user", () => {
   it("Login with password and user name", () => {
      cy.visit("http://127.0.0.1:5500/index.html");
      cy.wait(1000);
      cy.get(`[data-cy="login-modal"]`).click();
      cy.wait(1000);
      cy.get(`[data-cy="login-email"]`).type("albert@stud.noroff.no");
      cy.get(`[data-cy="login-password"]`).type("euwhgowieuhgoieh");
      cy.wait(1000);
      cy.get(`[data-cy="login-btn"]`).click();
   });
});
