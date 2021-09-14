/// <reference types="cypress" />

describe("My second test suite", () => {
    it("My second testcase", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[type='search']").type("ca");
        cy.wait(2000);

        cy.get(".products").as("productLocator");
        cy.get(".products").find(".product").each((element) => {
            const textVeg = element.find("h4.product-name").text()
            if(textVeg.includes("Cashews")){
                element.find("button").click()
            }
        });    
        cy.get('.cart-icon > img').click();
        cy.contains("PROCEED TO CHECKOUT").click();
        cy.contains("Place Order").click();
    });
});