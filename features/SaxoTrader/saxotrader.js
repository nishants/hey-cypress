import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import {login} from '../Pages/LoginPage';


const user = '9679324';
const password = '1234';

Given(`I open Google page`, () => {
  login({user, password});
});

Then(`I see {string} in the title`, title => {
  cy.title().should('include', title);
});
