import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BottomSheetOverviewExampleSheet, DialogContentExampleDialog, RegisterComponent} from "./register.component";
import {routes} from "./register.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {IConfig, NgxMaskModule} from 'ngx-mask';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatDialogModule} from "@angular/material/dialog";

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    RegisterComponent,
    BottomSheetOverviewExampleSheet,
    DialogContentExampleDialog
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
    MatBottomSheetModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class RegisterModule {
}
