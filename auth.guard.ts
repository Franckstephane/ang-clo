import { Token } from '@angular/compiler';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const usertoken = localStorage.getItem('token');
  
  if(!usertoken || usertoken && usertoken.length === 0){
    location.assign('./auth')
      return false;
  }
  return true
 
  
  // return true;
};
