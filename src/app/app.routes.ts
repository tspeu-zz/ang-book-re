import { Routes } from '@angular/router';

// import { FormulariosModule } from './formularios/formularios.module';
import { LoginFormComponent } from './formularios/login-form/login-form.component';


export const ROUTES: Routes = [
  { path: '**', component: LoginFormComponent },
  { path : 'login', component: LoginFormComponent },
  // { path : 'moduleForm', loadChildren: '@/app/formularios/formularios.module#FormulariosModule' }
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
