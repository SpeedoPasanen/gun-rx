# GunAngular

[![Join the chat at https://gitter.im/gun-angular/Lobby](https://badges.gitter.im/gun-angular/Lobby.svg)](https://gitter.im/gun-angular/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## What is this?

- Learning [Gun](http://gun.js.org) DB while wrapping it in Angular / Typescript with RXJS Observables.
- Very early stage, don't use in production (you shouldn't probably use Gun yet either), but feel free to look, play around, and give me your feedback.
- Wraps (at some point) all gun methods in the typed world, easy to use with Angular or any other or no framework.
- "Pet project" developed on limited free time.

## Links
- [Angular](https://angular.io)
- [Gun](http://gun.js.org) - a realtime p2p database built on JS that runs in browser and server(s), created by [Mark Nadal / @amark](https://github.com/amark) 
- [Related videos in Youtube](https://www.youtube.com/results?search_query=mark+nadal)
- [Gitter](https://gitter.im/gun-angular)
- [GitHub](https://github.com/funkizer/gun-angular)
- [Twitter: @kooditonttu](https://twitter.com/kooditonttu)

## ChangeLog
- Published what's in src/app/gun-angular to npm. To try: 
- In your AppModule or other module you want to use GunAngular in, add this:
 `GunAngularModule.forRoot({ peers: [location.origin + '/gun'] })`

## Using
- Run `npm install gun-angular --save` in your Angular project root folder.
- In your (App)Module, add import:
`
  imports: [
   GunAngularModule.forRoot({ peers: [location.origin + '/gun'] }),
    // ...
  ],
`
- Inject to a component:
`  constructor(private db: GunRef) { 
    this.db.get('test').on().subscribe(data => { ... });
} `

## Testing with this repo
- `git clone https://github.com/funkizer/gun-angular`
- `ng serve` or with AOT compiling: `npm run serve-aot`

## ToDo

- List and object Observable classes, meant for, obviously, listening to changes on a single node or a list of nodes (using gun.map) in a typed way
- Evolve as Gun evolves