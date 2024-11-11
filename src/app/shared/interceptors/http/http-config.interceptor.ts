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
import { SpinnerService } from 'src/app/layout/controls/extra/spinner/services/spinner.service';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService,) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // debugger
    let currentLang = localStorage.getItem('language') || 'ar'
    this.spinnerService.setSpinner(true);
    console.log('spinner');
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
        setTimeout(() => {
          this.spinnerService.setSpinner(false);
        }, 100);
      })
    );
  }
  cache = new Map<string, any>();
}
