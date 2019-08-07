import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

import {login} from '../Pages/LoginPage';
import {openTradingWorkspace, openNewsAndSearch, openAccount} from '../Pages/Homepage';


const user = '9679324';
const password = '1234';

Given(`I login as a demo user`, () => {
  login({user, password});
});

Then(`I can see trading workspace`, title => {
  openTradingWorkspace();
  // viewNewsAndSearch();
  // viewAccount();
});
