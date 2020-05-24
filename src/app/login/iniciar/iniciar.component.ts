import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ErrorModel, UserModel } from '../../models/models'
import { AuthService } from '../../service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styles: []
})
export class IniciarComponent implements OnInit {
    data: Date = new Date();

    user: UserModel;
    error: ErrorModel;

    constructor( private authService: AuthService, private router: Router ) {
        if ( this.authService.userStatus() ) {
            this.router.navigate(['/dashboard'])
        }
    }

    ngOnInit() {
        this.user = new UserModel();

        const body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }

    // tslint:disable-next-line: use-life-cycle-interface
    ngOnDestroy() {
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        const navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    setDataLogin( form: NgForm ) {
        if (form.invalid) { return; }
        
        if (!form.control.pristine) {
            this.authService.loginUser( this.user )
        }
    }


}
