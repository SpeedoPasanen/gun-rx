import { Injectable, Inject } from '@angular/core';
import { GunRef } from './gun-ref';

@Injectable()
export class GunAngularService {
  db: GunRef;
  constructor(
    @Inject('gunAngularOptions') options?) {
    this.db = new GunRef();
    if (!!options) {
      this.db.opt(options);
    }
  }

}
