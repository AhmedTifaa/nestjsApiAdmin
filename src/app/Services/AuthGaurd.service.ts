import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { JarwisService } from './jarwis.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
   Observable<boolean> | Promise<boolean> {
     console.log(this.Token.LoggedIn());
     if(!this.Token.LoggedIn())
     {

      this.router.navigate(['login']);
      return false;
     }
     return true;
  }
  constructor(private Token:TokenService,private router:Router) { }

}
