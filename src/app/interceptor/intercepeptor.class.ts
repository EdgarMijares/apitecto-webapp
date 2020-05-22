import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenUserInterceptor } from './token-user.interceptor';
import { UniversalInterceptorService } from './universal-interceptor.service';
import { BaseURInterceptor } from './base-url.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';

export const InterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: BaseURInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenUserInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UniversalInterceptorService, multi: true }
]