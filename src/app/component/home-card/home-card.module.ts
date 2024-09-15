import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardComponent } from './home-card.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AvatarModule} from "../avatar/avatar.module";
import {RouterLink, RouterLinkWithHref} from "@angular/router";



@NgModule({
    declarations: [
        HomeCardComponent
    ],
    exports: [
        HomeCardComponent
    ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AvatarModule,
    RouterLinkWithHref,
    RouterLink
  ]
})
export class HomeCardModule { }
