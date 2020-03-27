import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {

    name = '';
    selection: string = 'todos';
    categoria: any = {
        name: 'Arquitectura',
        decription: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Farquitectura.png?alt=media&token=a3b4cc9e-344d-463f-9868-c8e861a46402',
        cover: './assets/img/bg/arquitectura.jpg',
        path: ['/categoria', 'arquitectura']
    };

    constructor(private router: ActivatedRoute) {
        this.name = this.router.snapshot.paramMap.get('name_category');
    }

    ngOnInit(): void {}

    selectionList(selection: string) {
        this.selection = selection;
    }

}
