import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { IniciarComponent } from './iniciar/iniciar.component';

@NgModule({
    declarations: [
        IniciarComponent,
        LoginComponent,
        NuevoComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        HttpClientModule
    ]
})

export class LoginModule { }
