import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarLoginComponent } from '../shared/navbar-login/navbar-login.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})

export class LoginComponent implements OnInit {
    private _router: Subscription;

    constructor( private renderer: Renderer2, private router: Router, @Inject(DOCUMENT) private document: any, private element: ElementRef, public location: Location) {}
    ngOnInit() { }
}
