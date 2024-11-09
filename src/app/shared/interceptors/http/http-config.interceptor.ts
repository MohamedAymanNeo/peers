import {  Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, finalize, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let baseUrl = environment.apiServer.peersUrl
    let currentLang = localStorage.getItem('language') || 'ar'
      request = request.clone({
        headers: request.headers
          .set('LanguageCode', currentLang)
      });
    // NOTE
    return next.handle(request).pipe(
      tap((event: any) => {
        if (event instanceof HttpResponse) {
          this.cache.set(request.url, event);
        }
      }),
      finalize(()=>{
        
      })
    );
  }
  cache = new Map<string, any>();
}
