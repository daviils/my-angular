import {NgModule} from '@angular/core';
import {LoginComponent} from './login.component';
import {RouterModule} from "@angular/router";
import {routes} from "./login.routing";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],

})
export class LoginModule {
}
