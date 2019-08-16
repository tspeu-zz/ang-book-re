import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//
import { ROUTES } from './app.routes' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormulariosModule } from './formularios/formularios.module';
import { CategoriesComponent } from './categories/categories.component';

// SERVICES
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulariosModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules,
      enableTracing: false
    }),
    HttpClientModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
