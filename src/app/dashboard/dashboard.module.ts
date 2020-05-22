import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageCropperModule } from 'ngx-image-cropper';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ProfileComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        SharedModule,
        ComponentsModule,
        DashboardRoutingModule,
        ImageCropperModule
    ]
})

export class DashboardModule { }
