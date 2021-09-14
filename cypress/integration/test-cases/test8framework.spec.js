/// <reference types="cypress" />

describe("My third test suite", () => {


    before("", () => {

    })

    it("My third testcase", () => {
        cy.visit("https://www.rahulshettyacademy.com/angularpractice/");
        cy.get("input[name='name']")


    });
});