import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BaseComponent} from "../../core/base.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class RegisterListComponent extends BaseComponent implements OnInit {

  form = new FormGroup({
    keyword: new FormControl(''),
    start: new FormControl<Date | null>(null), // <Date | '2022-10-10T03:00:00.000Z'>('2022-10-10T03:00:00.000Z')
    end: new FormControl<Date | null>(null), // <Date | '2022-10-20T03:00:00.000Z'>('2022-10-20T03:00:00.000Z')
  });

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) public _locale: string,
    public router: Router,
    public translate: TranslateService) {
    super(router, translate);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const a = JSON.stringify(this.form.value);
    console.log('buscar');
    console.log(a);
  }

  toggleFormat(p: string) {
    this._locale = p;
    this._adapter.setLocale(this._locale);
  }

  setFilterDate() {
    const t = new Date('2022-10-21T03:00:00.000Z');
    let c = t;
    c.setDate(t.getDate() + 5);

    this.form.setControl('start', new FormControl(new Date()));
    this.form.setControl('end', new FormControl(c));
  }
}
