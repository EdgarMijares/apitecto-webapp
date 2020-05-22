import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserModel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

    constructor( private dbSave: AngularFirestore ) { }

    saveUserDataBase(id_user: string, user: UserModel) {
        const tempUser: UserModel = {
            ... user
        }

        delete tempUser.password;

        this.dbSave.collection<UserModel>('data_users').doc(id_user).set({ ... user })
        .then(() => {
            console.log('Registro exitoso', 'success', 'Bienvendo a Apitecto.');
        })
        .catch(error => {
            console.log('No se pudo guardar tu registro. Error code: ' + error.code);
        })
    }
}
