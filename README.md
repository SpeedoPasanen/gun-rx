# GunAngular

## What is this?

- Learning [Gun](http://gun.js.org) DB while wrapping it in Angular / Typescript with RXJS Observables.
- Very early stage, don't use in production (you shouldn't probably use Gun yet either), but feel free to look, play around, and give me your feedback.
- Wraps (at some point) all gun methods in the typed world, easy to use with Angular or any other or no framework.
- "Pet project" developed on limited free time.

## Links
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

## ToDo

- List and object Observable classes, meant for, obviously, listening to changes on a single node or a list of nodes (using gun.map) in a typed way
- Evolve as Gun evolves

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
