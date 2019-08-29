import { Routes } from '@angular/router';

import { FormulariosModule } from './formularios/formularios.module';
import { LoginFormComponent } from './formularios/login-form/login-form.component';
import { CategoriesComponent } from './categories/categories.component';



export const ROUTES: Routes = [
  { path: '**', component: CategoriesComponent },
 // { path : 'login', component: LoginFormComponent },
  { path : 'categorias', component: CategoriesComponent },
  { path : 'login',
    loadChildren: './formularios/formularios.module#FormulariosModule'
   // loadChildren: () => import('./formularios/formularios.module').then(mod => mod.FormulariosModule)
  }
  // { path : 'login', loadChildren: '@/app/formularios/formularios.module#FormulariosModule' }
  // path: 'recweb', loadChildren: '@app/main/main.module#MainModule',
];

// export const ROUTES: Routes = [
//   { path: '', redirectTo: 'PrescripcionCanarias', pathMatch: 'full' },
//   {
//     path: 'PrescripcionCanarias', component: InicioComponent,
//   },
//   {
//     path: 'recweb', loadChildren: '@app/main/main.module#MainModule',
//   },
//   {
//     path: 'Salir', component: SalirComponent,
//   },
// ];
