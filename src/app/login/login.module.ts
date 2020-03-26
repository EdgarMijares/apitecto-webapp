import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { IniciarComponent } from './iniciar/iniciar.component';

@NgModule({
    declarations: [
        LoginComponent,
        NuevoComponent,
        IniciarComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        SharedModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: 'YOUR_KEY_HERE'
        })
    ]
})

export class LoginModule { }
