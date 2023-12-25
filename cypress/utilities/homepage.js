import homePage from "../../cypress/fixtures/homePage.json";
import elementsPage from "../../cypress/fixtures/elementsPage.json";

const {homeUrl, homePageElements} = homePage;
const {elementsWebTable} = elementsPage;

export function url(){
    cy.visit(homeUrl);
}

export function element(){
    cy.get(homePageElements).first().should('have.text','Elements').click();
}

export function WebTables(){
    cy.get(elementsWebTable).first().should('have.text','Web Tables').click();
}



