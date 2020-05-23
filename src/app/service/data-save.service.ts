import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserModel } from '../models/models';
import { ShowUserMessageService } from './show-user-message.service';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

    constructor( private dbSave: AngularFirestore, private showMessage: ShowUserMessageService  ) { }

    saveUserDataBase(id_user: string, user: UserModel) {
        const tempUser: UserModel = {
            ... user
        }

        delete tempUser.password;

        this.dbSave.collection<UserModel>('data_users').doc(id_user).set({ ... tempUser })
        .then(() => {
            this.showMessage.succes('Registro exitoso', 'Bienvendo a Apitecto.');
        })
        .catch(error => {
            this.showMessage.error('No se pudimos guardar tu registro!', 'Estamos trabajando en ello, error: ' + error.code)
        })
    }
}
