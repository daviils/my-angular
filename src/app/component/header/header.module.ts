import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AvatarModule} from "../avatar/avatar.module";
import {SearchModule} from "../search/search.module";
import {RouterLink, RouterLinkWithHref} from "@angular/router";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    FlexLayoutModule,
    AvatarModule,
    SearchModule,
    RouterLink,
    RouterLinkWithHref,
  ]
})
export class HeaderModule { }
