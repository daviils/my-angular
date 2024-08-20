import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./home.routing";
import {FlexModule} from "@angular/flex-layout";
import {CardModule} from "../../component/card/card.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        FlexModule,
        CardModule,
        MatIconModule,
    ]
})
export class HomeModule {
}
