import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {TranslateService} from "@ngx-translate/core";
import {GridView} from "../model/grid";

declare var $: any;

export class BaseComponent {
  language: string = '';

  labels: any = {
    previousLabel: '',
    nextLabel: '',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  gridView: GridView = {
    col1: '8.333333',
    col2: '16.666667',
    col3: '25',
    col4: '33.333333',
    col5: '41.666667',
    col6: '50',
    col7: '58.333333',
    col8: '66.666667',
    col9: '75',
    col10: '83.333333',
    col11: '91.666667',
    col12: '100',
    gap30: '30px 0 grid',
  }

  constructor(public router: Router,
              public translate: TranslateService) {
  }

  /*setCulture(culture: string) {
    localStorage.setItem('culture', culture);
  }*/
  set accessCulture(param: string) {
    localStorage.setItem('culture', param);
  }
  get accessCulture(): string {
    return localStorage.getItem('culture') ?? '';
  }

  set accessLanguage(param: string) {
    localStorage.setItem('language', param);
  }

  get accessLanguage(): string {
    return localStorage.getItem('language') ?? '';
  }

  handlerCultureLanguage(language: string) {
    this.language = language;
    this.accessCulture  = language;
    this.accessLanguage = language;
    this.translate.use(language);
  }

  showMessage(t: string, m: string, type: any = 'warning') {
    Swal.fire({
      title: t,
      html: m,
      icon: type,
      confirmButtonColor: '#032E58',
    });
  }

  confirmMessage(t: string, m: string, callback: any = null) {
    Swal.fire({
      title: t,
      text: m,
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#032E58',
      cancelButtonColor: '#dc3545'
    }).then((result) => {
      if (!this.isNullOrUndefined(result.value) && result.value === true) {
        if (callback != null) {
          callback();
        }
      }
    });
  }

  isNullOrUndefined(value: any, object = false) {
    if (object) {
      return typeof value === 'undefined' || value == null;
    }
    return typeof value === 'undefined' || value == null || value.length === 0;
  }

  toggleLoader(b: boolean): void {
    if (!b) {
      $('#loaderBox').fadeOut();
    } else {
      $('#loaderBox').fadeIn();
    }
  }

  getErrorMessage(s: string) {
    return s === 'required' ? 'Campo obrigatório' : 'Campo inválido';
  }

  getDateFormatString(p: string): string {
    if (p === 'pt-BR') {
      return 'DD/MM/YYYY';
    } else {
      return 'MM/DD/YYYY';
    }
    // return '';
  }
}


