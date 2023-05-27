import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {routes} from "./register-list.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {RegisterListComponent} from "./register-list.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {MatPaginatorModule} from "@angular/material/paginator";
import {FlexLayoutModule} from "@angular/flex-layout";


export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    RegisterListComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatPaginatorModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
  ]
})
export class RegisterListModule {
}
