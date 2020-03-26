import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styles: []
})
export class NuevoComponent implements OnInit {

  data: Date = new Date();
  focus;
  focus1;

  constructor() { }

  ngOnInit() {
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

}
