import {Injectable} from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad, Route,
  Router,
  RouterStateSnapshot, UrlSegment, UrlTree
} from "@angular/router";
import {Observable, of, switchMap} from "rxjs";
import {AuthService} from "../auth.service";

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._check();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._check();
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this._check();
  }

  private _check(): Observable<boolean> {
    $('#loaderBox').fadeOut();
    return of(true);
    // Check the authentication status
    // return this._authService.check()
    //   .pipe(
    //     switchMap((authenticated) => {

    //       console.log("authenticated");
    //       console.log(authenticated);
    //       // If the user is authenticated...
    //       if (!authenticated) {
    //         // Redirect to the root
    //         this._router.navigate(['']);

    //         // Prevent the access
    //         return of(false);
    //       }

    //       // Allow the access
    //       return of(true);
    //     })
    //   );
  }
}
