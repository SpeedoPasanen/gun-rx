import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GunAngularOptions } from './gun-angular-options';
import { GunRef } from './gun-ref';
import * as Gun from 'gun';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class GunAngularModule {
  static forRoot(config: GunAngularOptions = new GunAngularOptions()) {
    return {
      ngModule: GunAngularModule,
      providers: [GunRef, { provide: 'gunAngularOptions', useValue: config }]
    };
  }
}
