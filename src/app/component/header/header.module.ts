import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {AngularSvgIconModule} from "angular-svg-icon";
import {FlexLayoutModule} from "@angular/flex-layout";



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
    ]
})
export class HeaderModule { }
