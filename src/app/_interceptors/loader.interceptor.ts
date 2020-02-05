import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbDialogService } from '@nebular/theme';
import { LoaderComponent } from '../_components/loader/loader.component';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private dialogService: NbDialogService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let dialog = this.dialogService.open(LoaderComponent, {
      closeOnBackdropClick: false
    });
    return next.handle(request).pipe(finalize(() => {
      dialog.close();
    }));
  }
}
