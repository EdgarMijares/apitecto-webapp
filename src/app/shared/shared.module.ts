import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FlatFooterComponent } from './flat-footer/flat-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotWorkComponent } from './not-work/not-work.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { FullFooterComponent } from './full-footer/full-footer.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';

@NgModule({
    declarations: [
        FlatFooterComponent,
        NavbarComponent,
        NotWorkComponent,
        NavbarLoginComponent,
        FullFooterComponent,
        NavbarAdminComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        NgbModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module
    ],
    exports: [
        FlatFooterComponent,
        NavbarComponent,
        NotWorkComponent,
        NavbarLoginComponent,
        FullFooterComponent,
        NavbarAdminComponent,
        RouterModule
    ]
})

export class SharedModule { }
