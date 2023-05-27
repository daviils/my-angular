import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
import {catchError, finalize, Observable, throwError} from "rxjs";
import {AuthUtils} from "./auth.utils";

declare var $: any;
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public requests = 0;
  public arrNoLoader = [
    '.svg',
    '/assets',
    '/svg',
  ];

  constructor(private _authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.requests = this.requests + 1;
    let countLoaderBlock = 0;
    if (req.body != null && req.body.operationName != null) {
      // console.log(req.body.operationName);
      this.arrNoLoader.map((e, i) => {
        if (req.body.operationName.indexOf(e) >= 0) {
          countLoaderBlock++;
        }
      });
    }
    this.arrNoLoader.map((e, i) => {
      if (req.url.indexOf(e) >= 0) {
        countLoaderBlock++;
      }
    });
    if (countLoaderBlock === 0) {
      this.toggleLoader(true);
    }

    const culture = localStorage.getItem('culture') as string;
    let newHeaders = req.headers;
    if (this._authService.accessToken != null && typeof this._authService.accessToken !== 'undefined') {
      newHeaders = newHeaders.append('Authorization', 'Bearer ' + this._authService.accessToken);
    }
    if (culture != null) {
      newHeaders = newHeaders.append('Culture', culture);
    }

    const authReq = req.clone({headers: newHeaders});
    return next.handle(authReq).pipe(
      finalize(() => {
        this.requests = this.requests - 1;
        if (this.requests === 0) {
          this.toggleLoader(false);
          // this.loading.hide();
        }
      })
    );
  }

  toggleLoader(b: boolean): void {
    if (!b) {
      $('#loaderBox').fadeOut();
    } else {
      $('#loaderBox').fadeIn();
    }
  }
}
