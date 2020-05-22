import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class TokenUserInterceptor implements HttpInterceptor {

    constructor( private auth: AngularFireAuth) {
        console.log('token interceptor constructor');
    }

    intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('token interceptor');
        
        return this.auth.idToken.pipe(
            mergeMap((token: any) => {
                console.log(token);
                if (token) {
                    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
                }

                return next.handle(req);
            })
        );
    }
}
