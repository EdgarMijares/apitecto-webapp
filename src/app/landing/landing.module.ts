import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';

import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

import { environment } from '../../environments/environment';

import { PrincipalComponent } from './principal/principal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LandingComponent } from './landing.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
    declarations: [PrincipalComponent, UserProfileComponent, CategoriasComponent, LandingComponent],
    imports: [
        CommonModule,
        SharedModule,
        ComponentsModule,
        LandingRoutingModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module,
        AgmCoreModule.forRoot({
            apiKey: environment.apiMapsKey
        })
    ]
})

export class LandingModule { }
