import { Injectable } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router' 
@Injectable({
  providedIn: 'root'
})

export class RouterService {

    constructor( private router: Router, private activeRoute: ActivatedRoute ) { }

    goToRoute( route: string[] ) {
        this.router.navigate(route);
    }
}
