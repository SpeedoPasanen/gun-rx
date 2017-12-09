import * as Gun from 'gun/gun';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { GunAngularOptions } from './gun-angular-options';
export class GunRef {
    gun: Gun;
    constructor(
        options?: GunAngularOptions
    ) {
        this.gun = new Gun();
        if (!!options) { this.gun.opt(options); }
    }
    static create(gun: Gun) {
        const newRef = new GunRef();
        newRef.gun = gun;
        return newRef;
    }
    opt(options: GunAngularOptions): GunRef {
        this.gun.opt(options);
        return this;
    }
    get(key: string): GunRef {
        return GunRef.create(this.gun.get(key));
    }
    put(data: any): GunRef {
        return GunRef.create(this.gun.put(data));
    }
    set(data: any): GunRef {
        return GunRef.create(this.gun.set(data));
    }
    back(): GunRef {
        return GunRef.create(this.gun.back());
    }
    map(): GunRef {
        return GunRef.create(this.gun.map());
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
            let stopped = false;
            this.gun.on((data: T, key, at, ev) => {
                if (stopped) {
                    o.complete();
                    return ev.off();
                }
                o.next(this.extractData(data));
            });
            return () => {
                // Caller unsubscribed
                stopped = true;
            };
        });
    }
    private extractData(data) {
        return _.pickBy(data, (val, key) => val !== null && key !== '_');
    }
}
