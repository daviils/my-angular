import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatBottomSheet, MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatDialog} from "@angular/material/dialog";
import {BaseComponent} from "../../core/base.component";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('teste', [Validators.required]), // Validators.pattern(/\s/)
    email: new FormControl('test@test.com', [Validators.required, Validators.pattern('^[^ ]+@[^ ]+\\.[a-z]{2,7}$')]),
    phone: new FormControl(''),
  });

  constructor(private _bottomSheet: MatBottomSheet,
              public dialog: MatDialog,
              public router: Router,
              public translate: TranslateService) {
    super(router, translate);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const a = JSON.stringify(this.form.value);
    console.log(this.form.valid);
    if (!this.form.valid) {
      console.log('Preencha os campos obrigatórios!');
      return;
    }
    console.log('submit register!');
    console.log(a);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: '../modal/register.modal.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: '../modal/register.dialog.html',
})
export class DialogContentExampleDialog {}
