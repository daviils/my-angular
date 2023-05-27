import {NgModule} from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {AuthInterceptor} from "./auth.interceptor";


@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,

  ]
})
export class AuthModule {
}
