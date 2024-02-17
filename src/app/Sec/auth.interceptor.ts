import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepting request:', req);

    const token = this.jwtService.getToken();

    if (token) {
      const cloned =
        req.clone({headers:new HttpHeaders({"Authorization":"Bearer "+ token})});
      console.log('Cloned request with token:', cloned);
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
