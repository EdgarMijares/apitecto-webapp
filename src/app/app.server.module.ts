import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

import { UniversalInterceptorService } from './service/universal-interceptor.service';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: UniversalInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
