import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../core/base.component";
import {Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {MediaMatcher} from "@angular/cdk/layout";

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
  language = super.accessLanguage.length === 0 ? 'pt-BR' : super.accessLanguage;
  slider: any = 50;
  constructor(public router: Router,
              public translate: TranslateService,
              public media: MediaMatcher) {
    super(router, translate)
    translate.addLangs(['en-US', 'es-ES', 'pt-BR']);
    super.handlerCultureLanguage(this.language);
  }

  ngOnInit(): void {
    super.handlerCultureLanguage(this.language);
  }

}
