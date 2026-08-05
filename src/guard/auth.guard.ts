import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import {inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

 const nav = inject(Router)
  const token = localStorage.getItem("token")
  if(token){
    return true
  }
  else{
    nav.navigate(['/home'])
    return false
  }
};
