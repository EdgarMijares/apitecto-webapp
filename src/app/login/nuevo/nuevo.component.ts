import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserModel } from '../../models/models';
import { AuthService } from '../../service/service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

    data: Date = new Date();

    user: UserModel;

    password: string;
    password_confirm: string

    constructor( private authService: AuthService) { }

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
        if ( !form.pristine && this.password === this.password_confirm ) {
            this.user.password = this.password;
            this.authService.createUser( this.user );
        }
        
    }

}
