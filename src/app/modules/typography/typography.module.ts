import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TypographyComponent} from './typography.component';
import {RouterModule} from "@angular/router";
import {routes} from "./typograph.routing";


@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TypographyModule {
}
