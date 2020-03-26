import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styles: []
})
export class CategoriasComponent implements OnInit {

    name = '';

    constructor(private router: ActivatedRoute) {
        this.name = this.router.snapshot.paramMap.get('name_category');
    }

    ngOnInit(): void {
    }

}
