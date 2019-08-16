import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CategoriesService {

  _URL = 'assets/config/config.json';


  constructor(private Http: HttpClient) { }

  getConfig() {
    console.log('https://localhost:44371/api/');
    return this.Http.get('https://localhost:44371/api/categories');
  }

  getAllResponse(): Observable<HttpResponse<any>> {
    console.log('ALLGO');
    return this.Http.get('https://localhost:44371/api/categories', { observe: 'response' });
  }
}
