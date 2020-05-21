import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { throwError } from 'rxjs'
import { catchError } from 'rxjs/internal/operators'

import { ErrorService } from '../service/local/error.service';

@Injectable({
    providedIn: 'root'
})

export class HttpErrorInterceptor implements HttpInterceptor {
    constructor ( private errorService: ErrorService ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError( error => {
                let errorMessage = '';
                if ( error instanceof ErrorEvent ) {
                    errorMessage = `Cleint-side error: ${ error.error.messasge }`;
                } else {
                    errorMessage = `Server-side error: ${ error.status } - ${ error.messasge }`;
                }

                this.errorService.show(errorMessage);
                return throwError(errorMessage);
            })
        )
    }
}