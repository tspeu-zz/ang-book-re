import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { ROUTES } from './app.routes';
import { CategoriesComponent } from './categories/categories.component';


const routes: Routes = [
   { path: '', component: CategoriesComponent},
   { path : 'categorias', component: CategoriesComponent },
   { path : 'login',
     loadChildren: './formularios/formularios.module#FormulariosModule'
    // loadChildren: () => import('./formularios/formularios.module').then(mod => mod.FormulariosModule)
   },
   { path : 'animator',
     loadChildren: './animacion/animacion.module#AnimacionModule'
    // loadChildren: () => import('./formularios/formularios.module').then(mod => mod.FormulariosModule)
   }
];
// const routes: Routes = ROUTES;

@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
