import {Injectable} from "@angular/core";
import { EmailValidator } from "@angular/forms";

import {catchError, Observable, of, switchMap,BehaviorSubject, throwError,merge} from "rxjs";
import { AuthType, User } from "src/generated/graphql";
import {AuthUtils} from "./auth.utils";


@Injectable()
export class AuthService {
  // public _userUservice: User;
  private _authenticated: boolean = false;
  private userDataSource = new BehaviorSubject<User>(new User());
  user = this.userDataSource.asObservable();

  /*constructor(private loginGQL: LoginGQL, private loginSocialGQL: LoginSocialGQL) {*/
  constructor() {
  }

  set accessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }


  get accessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
  }

  forgotPassword(_email: string) {
    // return this._httpClient.post('api/auth/forgot-password', email);
  }

  resetPassword(_password: string): Observable<any> {
    return of(null);
    // return this._httpClient.post('api/auth/reset-password', password);
  }

  /*signIn(credentials: { email: string; password: string }): Observable<LoginMutation> {
   return this.loginGQL.mutate({
      input: {
        email: credentials.email,
        password: credentials.password
      }
    }).pipe(switchMap(({data}) => {
      this._userUservice = data?.login.user as User;
      this._authenticated = true;
      this.accessToken = data?.login.token as string;
      return of(data as LoginMutation);
    }));

    // return this._httpClient.post('api/auth/sign-in', credentials).pipe(
    //     switchMap((response: any) => {
    //
    //         // Store the access token in the local storage
    //         this.accessToken = response.accessToken;
    //
    //         // Set the authenticated flag to true
    //         this._authenticated = true;
    //
    //         // Store the user on the user service
    //         this._userService.user = response.user;
    //
    //         // Return a new observable with the response
    //         return of(response);
    //     })
    // );
  }

  signInSocial(credentials: { code: string}): Observable<LoginSocialMutation> {
    return this.loginSocialGQL.mutate({
       input: {
         code: credentials.code,
       }
     }).pipe(switchMap(({data}) => {
       this._userUservice = data?.loginSocial.user as User;
       this._authenticated = true;
       this.accessToken = data?.loginSocial.token as string;
       return of(data as LoginSocialMutation);
     }));
  }*/
  signInUsingToken(): Observable<any> {
    // return this.userService.get().pipe(
    //   catchError(() =>
    //     // Return false
    //     of(false)
    //   ),
    //   switchMap((data: any) => {
    //     this._authenticated = true;
    //     // this.accessToken = response.accessToken;
    //     // this._userService.user = response.user;
    //     return of(true);
    //   })
    // )

    // return this._httpClient.post('api/auth/refresh-access-token', {
    //     accessToken: this.accessToken
    // }).pipe(
    //     catchError(() =>
    //         // Return false
    //         of(false)
    //     ),
    //     switchMap((response: any) => {
    //         // Store the access token in the local storage
    //         this.accessToken = response.accessToken;
    //         // Set the authenticated flag to true
    //         this._authenticated = true;
    //         // Store the user on the user service
    //         this._userService.user = response.user;
    //         // Return true
    //         return of(true);
    //     })
    // );

    return of(true);
  }

  signOut(): Observable<any> {
    localStorage.removeItem('accessToken');
    this._authenticated = false;
    return of(true);
  }

  signUp(_user: { name: string; email: string; password: string; company: string }): Observable<any> {
    return of(null);
    // return this._httpClient.post('api/auth/sign-up', user);
  }

  unlockSession(_credentials: { email: string; password: string }): Observable<any> {
    return of(null);
    // return this._httpClient.post('api/auth/unlock-session', credentials);
  }

  check(): Observable<boolean> {

    if (this._authenticated) {
      return of(true);
    }

    if (!this.accessToken) {
      return of(false);
    }

    if (AuthUtils.isTokenExpired(this.accessToken)) {
      return of(false);
    }
    return this.signInUsingToken();
    // return of(true);
  }

  updateUser(user: User) {
    this.userDataSource.next(user);

  }
}
