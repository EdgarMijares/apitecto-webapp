import { Injectable } from '@angular/core';
import { ErrorModel } from 'src/app/models/models';

@Injectable({
    providedIn: 'root'
})

export class ErrorService implements ErrorModel {
    code_error: number;
    description: string;
    status: boolean;

    constructor() { }

    show( messageError: string ) {
        console.error( messageError );
    }
}