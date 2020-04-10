import { Component, OnInit } from '@angular/core';

import { CategoriasService } from '../../service/categorias.service';

import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

    focus;

    categorias: any = [];

    constructor(private _categorias: CategoriasService) {
        this.categorias = this._categorias.getAllCategorias();
    }

    ngOnInit(): void {
        $(document).ready(() => {
            $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            nav: false,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                750: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
            });
        });
    }
}
