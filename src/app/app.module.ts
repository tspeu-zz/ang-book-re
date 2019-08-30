import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
// import { RouterModule, PreloadAllModules } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import this new file
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { ROUTES } from './app.routes' ;
// MODULOS
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
// COMPONENTS
// SERVICES
import { CategoriesService } from '@serv/categories.service';
// INTERCEPTORS
import { GeneralHttpInterceptorService } from '@serv/geeral-http-interceptor.service';
import { GeneralErrorHandlerService } from '@serv/general-error-handler.service';
import { ErrordialogComponent } from './errordialog/errordialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ErrordialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    // RouterModule.forRoot(ROUTES, {
    //   useHash: Boolean(history.pushState) === false,
    //   preloadingStrategy: PreloadAllModules,
    //   enableTracing: true
    // }),
  ],
  providers: [CategoriesService,
    { provide: ErrorHandler, useClass: GeneralErrorHandlerService },
    { provide: HTTP_INTERCEPTORS, useClass: GeneralHttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
