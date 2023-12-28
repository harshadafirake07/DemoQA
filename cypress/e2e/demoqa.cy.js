import { WebTables, element, url } from '../../cypress/utilities/homepage.js';
import { addWebTableEntry, readtable } from '../../cypress/utilities/webtable.js';

describe('Demo QA test suite', () => {

  it('TC_01 Add web table entry', () => {
    url();
    cy.wait(4000);
    element();
    cy.wait(8000);
    WebTables();
    addWebTableEntry();
    cy.wait(5000);
    readtable();
  })
})