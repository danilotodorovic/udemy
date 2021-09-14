/// <reference types="cypress" />

describe("My first test suite", () => {
    it("My first testcase", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[type='search']").type("ca");
        cy.wait(2000);
        cy.get(".product:visible").should("have.length", 4);
        cy.get(".products").find(".product").should("have.length", 4);
        cy.get(".products").as("productLocator");
        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click();
        cy.get(".products").find(".product").each((element) => {
            const textVeg = element.find("h4.product-name").text()
            if(textVeg.includes("Cashews")){
                element.find("button").click()
            }
        });
        cy.get(".brand").should("have.text", "GREENKART");
        const logo = cy.get(".brand").then((logoElement) => {
            cy.log(logoElement.text());
        });
        
    });
});