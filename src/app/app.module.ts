import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

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

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        SharedModule,
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        // AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        LoginModule,
        LandingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
