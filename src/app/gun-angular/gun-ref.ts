import * as Gun from 'gun/gun';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { GunAngularOptions } from './gun-angular-options';
export class GunRef {
    gun: Gun;
    stopped = false;
    constructor(gun: Gun) {
        this.gun = gun;
    }
    opt(options: GunAngularOptions): GunRef {
        this.gun.opt(options);
        return this;
    }
    get(key: string): GunRef {
        return new GunRef(this.gun.get(key));
    }
    put(data: any): GunRef {
        return new GunRef(this.gun.put(data));
    }
    set(data: any): GunRef {
        return new GunRef(this.gun.set(data));
    }
    val<T>(): Observable<T> {
        return Observable.create(o => {
            this.gun.val((data, key, at, ev) => {
                console.log(data, key, at, ev);
                o.next(this.extractData(data));
                o.complete();
            });
        });
    }
    on<T>(): Observable<T> {
        return Observable.create(o => {
            this.gun.on((data: T, key, at, ev) => {
                if (this.stopped) {
                    o.complete();
                    return ev.off();
                }
                o.next(this.extractData(data));
            });
            return () => {
                this.stopped = true;
            };
        });
    }
    private extractData(data) {
        return _.pickBy(data, (val, key) => val !== null && key !== '_');
    }
}
