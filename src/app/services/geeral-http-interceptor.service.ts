import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/map';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable()
export class GeneralHttpInterceptorService  implements HttpInterceptor {

  constructor() { }
                                                        //
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    const authReq = req.clone({headers: req.headers.set('headerName', 'headerValue')});
    const newBody = {...req.body, name: req.body.name.trim() };
    const reqNew = req.clone({ body: newBody });
    const request = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              console.log('event--->>>', event);
          }
          return event;
      }));
  }
}
// //(authReq).subscribe()
//   .catch((error, caught) => {
//   let errMsg: any;
//   if (error.status === 500 || error.status === 400 ) {
//     errMsg = 'ERROR STATUS';
//     return Observable.throw(`${errMsg} ${error}`);
//   }

//   return Observable.throw(error);


// }) as any;
