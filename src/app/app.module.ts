import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

import { AngularFireModule } from '@angular/fire';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';

import { AppComponent } from './app.component';
import { LandingModule } from './landing/landing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { BaseURInterceptor, HttpErrorInterceptor } from './interceptor/intercepeptor.class';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        SharedModule,
        LandingModule,
        LoginModule,
        DashboardModule,
        ComponentsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        AngularFireModule,
        ExamplesModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [
        // INTERCEPTORS
        { provide: HTTP_INTERCEPTORS, useClass: BaseURInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
