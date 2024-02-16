import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    // Check if user is authenticated (you may implement your own authentication logic)
    const isAuthenticated = localStorage.getItem('accessToken') !== null;

    if (isAuthenticated) {
      // If authenticated, allow access to the route
      return true;
    } else {
      // If not authenticated, redirect to login page
      return this.router.createUrlTree(['/login']); // Assuming your login route is '/login'
    }
  }
}
