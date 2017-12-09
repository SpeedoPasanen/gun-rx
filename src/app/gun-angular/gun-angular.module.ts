import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GunAngularOptions } from './gun-angular-options';
import * as Gun from 'gun';
import { GunAngularService } from './gun-angular.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class GunAngularModule {
  static forRoot(config?: GunAngularOptions) {
    return {
      ngModule: GunAngularModule,
      providers: [
        GunAngularService,
        { provide: 'gunAngularOptions', useValue: config }
      ]
    };
  }
}
