import { Injectable } from '@angular/core';

import { ErrorModel } from '../models/models';
import { AuthSaveService } from './auth/auth-save.service';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ShowUserMessageService {

    constructor(private dbSave: AuthSaveService) { }

    succes(title, message) {
        Swal.fire(title, message, 'success');
    }

    /**
     * @param title 
     * Shows the title to display the user message, only if @param messageError exists, 
     * otherwise just save the error for review
     * 
     * @param messageError 
     * Description to error on screen.
     */
    error( error:string, messageError?: string ) {
        Swal.fire(error, messageError, 'error');
    }

    authError( error:string, messageError?: string ) {
        if ( messageError ) {
            // Message to user
            Swal.fire(error, messageError, 'error');
        } else {
            // Message to technical
            this.dbSave.saveErrorForTechnical(new ErrorModel('auth-service', error))
        }
    }
}
