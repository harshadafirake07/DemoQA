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
    cy.get(webtableIsPresent).should("be.visible");
    cy.get(webtableRow).should("have.length.gt", 0).as("tableRows");
    cy.get("@tableRows")
        .filter(`:has(${webtableRowCell}:not(:contains("&nbsp;")))`)
        .each(($row, index) => {
            cy.wrap($row)
                .find(".rt-td")
                .invoke("text")
                .then((rowdata) => {
                    cy.log(`row ${index + 1} : ${rowdata}`);
                });
        });
}
