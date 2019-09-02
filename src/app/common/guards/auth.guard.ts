import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate   {

  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('state.url', state.url);
    if ( (state.url.indexOf('/login') > -1) || (state.url.indexOf('/register') > -1) ) {
      if( localStorage['userLogin'] ) {
          this.router.navigate(['/dashboard']);
      } else {
        return true;
      }
    } else {
      if( localStorage['userLogin'] ) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
  
}
