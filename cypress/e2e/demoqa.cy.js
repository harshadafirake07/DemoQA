import { WebTables, element, url } from '../../cypress/utilities/homepage.js';
import { addWebTableEntry, readtable } from '../../cypress/utilities/webtable.js';

describe('Demo QA test suite', () => {

  it('TC_01 Add web table entry and read the entry', () => {
    url();
    element();
    WebTables();
    addWebTableEntry();
    readtable();
  })

  it('TC_02', () =>{
    
  })

})