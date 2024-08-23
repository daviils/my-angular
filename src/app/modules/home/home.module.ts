import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./home.routing";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FlexModule,
    MatIconModule,
    MatInputModule,
  ]
})
export class HomeModule {
}
