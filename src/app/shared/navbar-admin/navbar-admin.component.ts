import { Component, OnInit, ElementRef } from '@angular/core';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AuthService } from '../../service/service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styles: []
})
export class NavbarAdminComponent implements OnInit {

    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element: ElementRef, private authService: AuthService) {
        this.sidebarVisible = false;
    }

    ngOnInit(): void {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        setTimeout( () => {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    logOutSession() {
        this.authService.logOutUser();
    }

}
