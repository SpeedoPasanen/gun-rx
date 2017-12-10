# Gun-RX
Learning Gun DB while wrapping it in RXJS Observables & Typescript.

[![Join the chat at https://gitter.im/gun-angular/Lobby](https://badges.gitter.im/gun-angular/Lobby.svg)](https://gitter.im/gun-angular/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## What's this?

- Very early, don't use in production. Feel free to look, play around and let me know what you think.
- Aims to wrap all gun methods in [RXJS](https://github.com/reactivex/rxjs) Observables
- Should work with Angular, React, any framework, or without any. 
- "Pet project" developed on limited free time.
- Like Gun, this runs fine entirely in a browser, without any server. To sync and persist data, you need at least one. Follow instructions on [github.com/amark/gun](https://github.com/amark/gun) about setting up a NodeJS server.

## What's Gun?
A realtime p2p database built on JS that runs in a browser and server(s), created by [Mark Nadal / @amark](https://github.com/amark). Got graphs, documents, key-value, you name it. Read more: [gun.js.org](http://gun.js.org)

## Links
- [Gun](http://gun.js.org)
- [Gitter](https://gitter.im/gun-rx)
- [GitHub](https://github.com/funkizer/gun-rx)
- [Twitter: @funkizer](https://twitter.com/funkizer)
- [Gun Gitter](https://gitter.im/amark/gun)
- [Gun GitHub](https://github.com/amark/gun)
- [Learn more @ Youtube](https://www.youtube.com/results?search_query=mark+nadal)

## Using without a framework
I'm mainly using Angular to dev & test this. Let me know what happens if you try it without NG!

### TypeScript / Vanilla JS
The lib is built to ES6 JS, so use your favourite build/transpile tool to support other than latest evergreen browsers.

```
import { GunRef } from 'gun-rx';
const gunRef = new GunRef(); // This is your "root" GunRef, you should probably keep it safe and reuse
```
To pass options (optional):
```
import { GunRef, GunOptions } from 'gun-rx';
const gunOptions: GunOptions = {
  peers: [location.origin + '/gun']
};
const gunRef = new GunRef(gunOptions);
// Will call gun.opt(gunOptions) for you
```

```
const subscription = this.db.get('test').on().subscribe(data => { doSomethingWith(data) });
this.db.get('test').put({testing: true});
```

.on() returns a hot Observable which keeps streaming changes to you indefinately. So remember to call `subscription.unsubscribe()` when the view is destroyed or you don't want any more updates. Not doing this will result in memory leaks and other unwanted stuff to happen.

## Using with NodeJS?
I don't see why it wouldn't *just work*. Let me know if you try.

## Using with Angular
If you don't have an angular project yet, run `ng new my-gun-rx-app`

CD into your project root folder, run `npm install gun-rx --save`

Add into your (App)Module:

```
import { GunAngularModule, GunOptions } from 'gun-rx';
const gunOptions: GunOptions = {
  peers: [location.origin + '/gun']
};
@NgModule({
  // ...
  imports: [
   GunAngularModule.forRoot(gunOptions),
    // ...
  ],
```

Inject GunRef to a component:

```  
constructor(private db: GunRef) { 

 const subscription = this.db.get('test').on().subscribe(data => { doSomethingWith(data) });

  this.db.get('test').put({testing: true});

  setTimeout(()=>{
    /* Always remember to unsubscribe when you leave the component, to avoid memory leaks.
    Usually the best place for unsubscribing is ngOnDestroy() {}. Remember to also make your component implement OnDestroy */
    subscription.unsubscribe();
  },2000);
} 
```

## Running with this repo
- `git clone https://github.com/funkizer/gun-rx`
- `cd gun-rx`
- `ng serve` 
- With AOT compilation: `npm run serve-aot`

## Targets

- Provide an API as close as possible to Gun, with strong typing, Observables and documenting-by-code (intentful names, good comments).
- Evolve as Gun evolves