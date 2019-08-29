import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//
// import { ROUTES } from './app.routes' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { FormulariosModule } from './formularios/formularios.module';
// import { CategoriesComponent } from './categories/categories.component';

// SERVICES
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(ROUTES, {
    //   useHash: Boolean(history.pushState) === false,
    //   preloadingStrategy: PreloadAllModules,
    //   enableTracing: true
    // }),
    HttpClientModule
  ],
  providers: [CategoriesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
