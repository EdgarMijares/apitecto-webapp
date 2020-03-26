import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: []
})
export class PrincipalComponent implements OnInit {

    focus;
    focus1;
    categorias: any = [
        { name: 'Arquitectura', image: './assets/img/icon/arquitectura.png', path: ['/categoria', 'arquitectura'] },
        { name: 'Carpinteria',  image: './assets/img/icon/carpinteria.png',  path: ['/categoria', 'carpinteria'] },
        { name: 'Construcción', image: './assets/img/icon/construccion.png', path: ['/categoria', 'construccion'] },
        { name: 'Cristaleria',  image: './assets/img/icon/cristaleria.png',  path: ['/categoria', 'cristaleria'] },
        { name: 'Electricidad', image: './assets/img/icon/electricidad.png', path: ['/categoria', 'electricidad'] },
        { name: 'Herreria',     image: './assets/img/icon/herreria.png',     path: ['/categoria', 'herreria'] },
        { name: 'Interiores',   image: './assets/img/icon/interiores.png',   path: ['/categoria', 'interiores'] },
        { name: 'Pintura',      image: './assets/img/icon/pintura.png',      path: ['/categoria', 'pintura'] },
        { name: 'Plomeria',     image: './assets/img/icon/plomeria.png',     path: ['/categoria', 'plomeria'] },
    ]

    constructor() { }

    ngOnInit(): void {
        $(document).ready(function() {
            $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1500,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: false
                },
                750: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
            });
        });
    }

    goToCategori() {
        console.log('click me!')
    }

}
