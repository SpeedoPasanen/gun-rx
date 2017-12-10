import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Gun from 'gun';
import { GunAngularService } from './gun-angular.service';
import { GunOptions } from '../gun-options';
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
