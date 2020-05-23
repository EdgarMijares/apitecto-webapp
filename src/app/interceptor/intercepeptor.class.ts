import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseURInterceptor } from './base-url.interceptor';
import { TokenUserInterceptor } from './token-user.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { UniversalInterceptorService } from './universal-interceptor.service';

export const InterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: BaseURInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenUserInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UniversalInterceptorService, multi: true }
]