import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CategoriasService {
    categorias: any = [
        {
            name: 'Arquitectura',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Farquitectura.png?alt=media&token=a3b4cc9e-344d-463f-9868-c8e861a46402',
            cover: '',
            path: ['/categoria', 'arquitectura']
        }, {
            name: 'Construcción',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Fconstruccion.png?alt=media&token=21e263de-8c81-4fd6-accd-6982254267ac',
            cover: '',
            path: ['/categoria', 'construccion']
        }, {
            name: 'Electricidad',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Felectricidad.png?alt=media&token=686d85c7-af2f-4e68-8931-04ff6b190d27',
            cover: '',
            path: ['/categoria', 'electricidad']
        }, {
            name: 'Carpinteria',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Fcarpinteria.png?alt=media&token=719ead84-8ffa-48f6-90dd-5bc425c3bce4',
            cover: '',
            path: ['/categoria', 'carpinteria']
        }, {
            name: 'Cristaleria',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Fcristaleria.png?alt=media&token=b75b54fd-cc51-40ef-92ff-16b0c644fb96',
            cover: '',
            path: ['/categoria', 'cristaleria']
        }, {
            name: 'Interiores',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Finteriores.png?alt=media&token=a65809a2-fb9a-4400-a890-9c9b9785b53f',
            cover: '',
            path: ['/categoria', 'interiores']
        }, {
            name: 'Herreria',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Fherreria.png?alt=media&token=551c7449-e594-4158-8027-669a32309959',
            cover: '',
            path: ['/categoria', 'herreria']
        }, {
            name: 'Plomeria',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Fplomeria.png?alt=media&token=f8b261ae-1e7a-4f8a-951e-f1033188cdb8',
            cover: '',
            path: ['/categoria', 'plomeria']
        }, {
            name: 'Pintura',
            decription: '',
            image: 'https://firebasestorage.googleapis.com/v0/b/apitecto-d77cd.appspot.com/o/category%2Ficon%2Fpintura.png?alt=media&token=840731e9-7a29-4db9-8175-c7bfe8819113',
            cover: '',
            path: ['/categoria', 'pintura']
        },
    ];

    constructor() { }

    getAllCategorias() {
        return this.categorias;
    }
}
