import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    saveLocalStorage( KEY: string, VAR: string) {
        localStorage.setItem(KEY, VAR);
    }

    removeLocalStorage( KEY: string ) {
        (localStorage.getItem(KEY)) ? localStorage.removeItem(KEY): '';
    }

    getLocalStorage( KEY: string ) {
        return (localStorage.getItem(KEY)) ? localStorage.getItem(KEY) : '';
    }

    getLocalStorageObject( KEY: string ) {
        return (localStorage.getItem('token')) ? JSON.parse(localStorage.getItem('token')): '';
    }

    saveLocalStorageObject( KEY: string, OBJECT: any ) {
        localStorage.setItem(KEY, JSON.stringify(OBJECT));
    }
}
