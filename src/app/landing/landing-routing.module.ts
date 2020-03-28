import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './principal/principal.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent, children: [
        { path: '', component: PrincipalComponent },
        { path: 'user/:user_id', component: UserProfileComponent },
        { path: 'categoria/:name_category', component: CategoriasComponent }

    ]},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class LandingRoutingModule { }
