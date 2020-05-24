import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/** LOCAL COMPONENTS */
import { LoginComponent } from './login.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent, children: [
        { path: '', component: IniciarComponent },
        { path: 'registro', component: NuevoComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class LoginRoutingModule { }
