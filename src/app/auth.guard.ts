import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';



export const authGuard: CanActivateFn = (route, state) => {
  //Based on the condition i will allow or deny the access
  //Here from localstorage check the username if the username is "admin" then allow the access
  
  const router = inject(Router);   // which is help to create the instance of Router
  
  let userName = localStorage.getItem("username");

  if(userName === "admin"){
    return true;    // allow the access
  }
  else
  {
    router.navigate(["/login"]);
    // Please navigate to the Login page...
    return false;
  }
};
