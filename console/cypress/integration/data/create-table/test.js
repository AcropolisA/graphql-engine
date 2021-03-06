/* eslint no-unused-vars: 0 */
/* eslint import/prefer-default-export: 0 */
import { testMode } from '../../../helpers/common';
import { setMetaData } from '../../validators/validators';

import {
  checkCreateTableRoute,
  failCTWithoutColumns,
  failCTWithoutPK,
  failCTDuplicateColumns,
  passCT,
  failCTDuplicateTable,
  deleteCTTestTable,
} from './spec';

const setup = () => {
  describe('Setup route', () => {
    it('Visit the index route', () => {
      // Visit the index route
      cy.visit('/data/schema/public');
      cy.wait(7000);
      // Get and set validation metadata
      setMetaData();
    });
  });
};

export const runCreateTableTests = () => {
  describe('Create Table', () => {
    it('Create table button opens the correct route', checkCreateTableRoute);
    it('Fails to create table without columns', failCTWithoutColumns);
    it('Fails to create table without primary key', failCTWithoutPK);
    it('Fails to create with duplicate columns', failCTDuplicateColumns);
    it('Successfuly creates table', passCT);
    it('Fails to create duplicate table', failCTDuplicateTable);
    it('Delete off the test table', deleteCTTestTable);
  });
};

if (testMode !== 'cli') {
  setup();
  runCreateTableTests();
}
