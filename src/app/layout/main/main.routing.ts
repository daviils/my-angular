import {Route} from '@angular/router';
import {MainComponent} from "./main.component";

export const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../..//modules/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'register-list',
        loadChildren: () => import('../..//modules/register-list/register-list.module').then(m => m.RegisterListModule)
      },
      {
        path: 'typography',
        loadChildren: () => import('../..//modules/typography/typography.module').then(m => m.TypographyModule)
      }
    ]
  }
];
