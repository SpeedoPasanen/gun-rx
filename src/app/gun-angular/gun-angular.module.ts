import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Gun from 'gun';
import { GunOptions } from '../gun-rx/gun-options';
import { GunAngularService } from './gun-angular.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class GunAngularModule {
  static forRoot(config?: GunOptions) {
    return {
      ngModule: GunAngularModule,
      providers: [
        GunAngularService,
        { provide: 'gunAngularOptions', useValue: config }
      ]
    };
  }
}
