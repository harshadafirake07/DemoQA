import elementsPage from '../../cypress/fixtures/elementsPage.json';
import homePage from '../../cypress/fixtures/homePage.json';

const {homePageElements} = homePage;
const {elementsWebTable} = elementsPage;

export function url(){
    cy.visit(Cypress.env('url'));
}

export function element(){
    cy.get(homePageElements).first().should('have.text','Elements').should('be.visible').click();
}

export function WebTables(){
    cy.get(elementsWebTable).first().should('have.text','Web Tables').should('be.visible').click();
}



