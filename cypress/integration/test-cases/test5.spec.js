/// <reference types="cypress" />

describe("My third test suite", () => {
    it("My third testcase", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("tr td:nth-child(2)").each((element, index) => {
            const text = element.text();
            if(text.includes("Python")){
                cy.get("tr td:nth-child(2)").eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal("25");
                });
            }
        });

    });
});

