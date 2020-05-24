import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

    constructor( private authService: AuthService, private router: Router ) {}

    canActivateChild(): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.userStatus()) {
            return true
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
  
}
