/// <reference types="cypress" />

describe("My third test suite", () => {
    it("My third testcase", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // cy.get("#checkBoxOption1").check().should("be.checked").and("have.value", "option1");
        // cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
        // cy.get("input[type='checkbox']").each((element) => {
        //     cy.get(element).check();
        // });
        // cy.get("#dropdown-class-example").select("option2").should("have.value", "option2");
        // cy.get("#autocomplete").type("ind");
        // cy.get(".ui-menu-item div").each((element) => {
        //     if(element.text() === "India"){
        //         element.click();
        //     }
        // });
        // cy.get("#autocomplete").should("have.value", "India");

        // cy.get("#displayed-text").should("be.visible");
        // cy.get("#hide-textbox").click();
        // cy.get("#displayed-text").should("not.be.visible");
        // cy.get("#show-textbox").click();
        // cy.get("#displayed-text").should("be.visible");

        cy.get("input[value='radio2']").check().should("be.checked");


        
    });
});

