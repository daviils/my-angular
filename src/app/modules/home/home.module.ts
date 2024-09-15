import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./home.routing";
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HeaderModule} from "../../component/header/header.module";
import {NavBarModule} from "../../component/nav-bar/nav-bar.module";
import {HomeCardModule} from "../../component/home-card/home-card.module";
import { HomeDetailComponent } from './home-detail/home-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeDetailComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FlexModule,
    MatIconModule,
    MatInputModule,
    HeaderModule,
    NavBarModule,
    HomeCardModule,
  ]
})
export class HomeModule {
}
