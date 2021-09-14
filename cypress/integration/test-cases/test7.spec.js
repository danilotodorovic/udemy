/// <reference types="cypress" />

describe("My third test suite", () => {
    it("My third testcase", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").then((element) => {
            const url = element.prop("href");
            cy.visit(url);
            // ovo nece raditi jer osnova mora biti https://rahulshettyacademy.com
            // a mi ovde menjamo osnovu i odlazimo na http://www.qaclickacademy.com
        })
    });
});

