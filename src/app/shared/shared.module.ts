import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlatFooterComponent } from './flat-footer/flat-footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotWorkComponent } from './not-work/not-work.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';

@NgModule({
    declarations: [
        FlatFooterComponent,
        NavbarComponent,
        NotWorkComponent,
        NavbarLoginComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        FlatFooterComponent,
        NavbarComponent,
        NotWorkComponent,
        NavbarLoginComponent
    ]
})

export class SharedModule { }
