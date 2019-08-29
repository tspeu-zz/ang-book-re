# Forms
-> para generar un modulo y asignalo a rus routes especificas-->

se genera un module ng g m nombreMODULE
se genere componentes del modulo-->
ng g c nombreModulo/nombreComponente

y se genere el modulo routing-module-->

##alli lleva todas las rutas. tanto de componentes como de modulos>
para compopnentes-->
 { path : 'nopmbre', component: NombreComponent },
 para modulos en Angular 7->
  path : 'modulo',
 loadChildren: './modulo/fnombreModulo.module#NombreModule'

 ##se import forRoot las rutas y se exporta el modulo
 @NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

# En el modulo NombreModulo
se importa el componenet-> y se crea la ruta-->
  const route: Routes = [
    {path: '', component: AnimatorComponent }
  ];
#y se importa fro child la Routes
  declarations: [AnimatorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
