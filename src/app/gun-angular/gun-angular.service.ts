import { Injectable, Inject } from '@angular/core';
import * as Gun from 'gun/gun';
import { GunAngularOptions } from './gun-angular-options';
import { GunRef } from './gun-ref';
@Injectable()
export class GunAngularService {
  private _gun: Gun;
  /**
   * Read-Only original Gun ref.
   */
  get gun(): Gun { return this._gun; }
  constructor( @Inject('GunAngularOptions') private options: GunAngularOptions) {
    this._gun = new Gun();
    this._gun.opt(options);
  }
  get(key: string): GunRef {
    return new GunRef(this.gun.get(key));
  }
}
