import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let token = localStorage.getItem('TOKEN');
    if(!token) {
      return next.handle(request);
    }
    let header = { 'Authorization': 'Bearer ' + token };
    let clone = request.clone({setHeaders: header});
    return next.handle(clone);
  }
}
