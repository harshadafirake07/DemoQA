import { formDataList } from "../../cypress/constants/constant.js";
import webTablesPage from "../../cypress/fixtures/webTablesPage.json";

const {
    webTableAddButton,
    registerationFirstName,
    registerationLastName,
    registerationEmail,
    registerationAge,
    registerationSalary,
    registerationDepartment,
    registerationSubmit,
    webtableIsPresent,
    webtableRow,
    webtableRowCell,
} = webTablesPage;

export function addWebTableEntry() {
    formDataList.forEach((formData, index) => {
        cy.get(webTableAddButton).click();
        cy.get(registerationFirstName).type(formData.firstname);
        cy.get(registerationLastName).type(formData.lastname);
        cy.get(registerationEmail).type(formData.email);
        cy.get(registerationAge).type(formData.age);
        cy.get(registerationSalary).type(formData.salary);
        cy.get(registerationDepartment).type(formData.department);
        cy.get(registerationSubmit).click();
    });
}

export function readtable() {
    //const rowdata=[];
    cy.get(webtableIsPresent).should("be.visible");
    cy.get(webtableRow).should("have.length.gt", 0).as("tableRows");

    cy.get("@tableRows")
        .each(($row, index) => {
            cy.wrap($row)
                .find(webtableRowCell)
                .invoke("text")
                .then((rowdata) => {
                    cy.log(`row ${index + 1} : ${rowdata}`);
                });
        });
}


export function form(){
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('[name="gender"]').check('Male');
    cy.get('#userNumber').type('1234567890');
    cy.get('#dateOfBirthInput').type('1990-01-01');
    cy.get('.subjects-auto-complete__value-container').type('Math').type('{enter}');
    cy.get('[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type('123 Main Street, Cityville');
    cy.get('#submit').click();
    cy.get('.modal-title').should('contain', 'Thanks for submitting the form');
  };
