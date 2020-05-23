import { Injectable } from '@angular/core';
import { ErrorModel } from 'src/app/models/models';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthSaveService {

    constructor(private dbSave: AngularFirestore) { }
    
    saveErrorForTechnical( error: ErrorModel ) {
        this.dbSave.collection<ErrorModel>('errors').doc(this.dbSave.createId()).set( { ... error } )
        .then(() => {
            console.log('Se guardo el error en la base de datos');
        });
    }
}
