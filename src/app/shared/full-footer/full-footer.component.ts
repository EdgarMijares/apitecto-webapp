import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../service/categorias.service';

@Component({
  selector: 'app-full-footer',
  templateUrl: './full-footer.component.html',
  styleUrls: ['./full-footer.component.scss']
})
export class FullFooterComponent implements OnInit {

    date: number;
    categorias: [];

    constructor(private _categorias: CategoriasService) {
        this.categorias = this._categorias.getAllCategorias();
    }

    ngOnInit(): void {
        this.date = new Date().getFullYear();
    }

}
