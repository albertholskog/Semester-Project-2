describe("Login and create a new listing", () => {
   it("Create listing info and publich", () => {
      cy.visit("http://127.0.0.1:5500/index.html");
      cy.wait(1000);
      cy.get(`[data-cy="login-modal"]`).click();
      cy.wait(1000);
      cy.get(`[data-cy="login-email"]`).type("albert@stud.noroff.no");
      cy.get(`[data-cy="login-password"]`).type("euwhgowieuhgoieh");
      cy.wait(1000);
      cy.get(`[data-cy="login-btn"]`).click();
      cy.wait(1000);
      cy.get(`[data-cy="create-listing"]`).click();
      cy.wait(1000);
      cy.get(`[data-cy="listing-title"]`).type("cypres test");
      cy.wait(1000);
      cy.get(`[data-cy="listing-description"]`).type("cypres test description");
      cy.wait(1000);
      cy.get(`[data-cy="listing-media"]`).type(
         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png"
      );
      cy.wait(1000);
      cy.get(`[data-cy="listing-media-2"]`).type(
         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png"
      );
      cy.wait(1000);
      cy.get(`[data-cy="listing-media-3"]`).type(
         "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png"
      );
      cy.wait(1000);
      cy.get(`[data-cy="listing-date"]`).type("2023-01-01T08:30");
      cy.wait(1000);
      cy.get(`[data-cy="listing-btn"]`).click();
   });
});
