import { formDataList } from '../../cypress/constants/constant.js';
import webtable from '../../cypress/fixtures/webTablesPage.json';

const {
    webTableAddButton,
    registerationFirstName,
    registerationLastName,
    registerationEmail,
    registerationAge,
    registerationSalary,
    registerationDepartment,
    registerationSubmit
} = webtable;

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

    })

}
