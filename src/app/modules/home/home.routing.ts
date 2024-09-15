import {Route} from '@angular/router';
import {HomeComponent} from "./home.component";
import {HomeDetailComponent} from "./home-detail/home-detail.component";

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: HomeDetailComponent
  }
];
