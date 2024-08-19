import { NgModule } from '@angular/core';
import {ExtraOptions, PreloadAllModules, RouterModule, Routes} from '@angular/router';

// Extra Config
const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {
    path: '',
    // canActivate: [NoAuthGuard],
    // canActivateChild: [NoAuthGuard],
    loadChildren: () => import('./layout/main/main.module').then(m => m.MainModule),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
