import { CanDeactivateFn } from '@angular/router';

export const exitGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  var confirmationMessage = window.confirm("Do you really want to leave this page?");  // boolean

  if(confirmationMessage){
     return true;
  }
  else{
    return false;
  }

};
