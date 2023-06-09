import {AuthModule} from "./auth/auth.module";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSliderModule} from "@angular/material/slider";

const coreComponents = [
  AuthModule,
  MatButtonToggleModule,
  MatSliderModule,
];

@NgModule({
  imports: [
    coreComponents
  ],
  exports: [
    coreComponents
  ]

})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule?: CoreModule
  ) {
    // Do not allow multiple injections
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
}
