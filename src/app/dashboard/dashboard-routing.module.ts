import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../service/auth/auth.guard';

import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivateChild: [AuthGuard], children: [
        { path: '', component: ProfileComponent }
    ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { enableTracing: true })
    ]
})

export class DashboardRoutingModule { }
