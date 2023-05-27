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
  typesOfShoes: any[] = [
    {state: 'home', type: 'link', name: 'Home'},
    {state: 'register', type: 'link', name: 'Register'},
    {state: 'register-list', type: 'link', name: 'Register List'},
    {state: 'typography', type: 'link', name: 'Typography'},
  ];

  constructor(public router: Router,
              public translate: TranslateService,
              public changeDetectorRef: ChangeDetectorRef,
              public media: MediaMatcher) {
    super(router, translate)
    translate.addLangs(['en-US', 'es-ES', 'pt-BR']);
    super.handlerCultureLanguage(this.language);
  }

  ngOnInit(): void {
    super.handlerCultureLanguage(this.language);
  }

  ngOnDestroy(): void {
  }

  onSubmitSlider(): number {
    return this.slider.value
  }

  handlerMode(event: any) {
    $('#mode').toggleClass('dark-mode')
  }

}
