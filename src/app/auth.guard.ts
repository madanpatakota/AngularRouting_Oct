import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  //Based on the condition i will allow or deny the access
  return false;
};
