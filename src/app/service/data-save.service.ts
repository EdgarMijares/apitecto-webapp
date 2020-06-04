import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserModel } from '../models/models';
import { ShowUserMessageService } from './show-user-message.service';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

    constructor( private dbSave: AngularFirestore, private showMessage: ShowUserMessageService  ) { }

    setUserDataBase(ID_USER: string, USER: UserModel, action: string) {
        const tempUser: UserModel = {
            ... USER
        }

        delete tempUser.password;
        delete tempUser.phone;
        delete tempUser.social;
        console.log(tempUser);

        switch(action) {
            case 'update': {
                this.updateUserDataBase(ID_USER, tempUser);
                break;
            }
            case 'save': {
                this.updateUserDataBase(ID_USER, tempUser);
                break;
            }
            default: {
                console.error('No sabemos que hacer con esta peticion.');
                break;
            }
        }
    }

    saveUserDataBase(ID_USER: string, USER: UserModel): Promise<void> {
        return this.dbSave.collection<UserModel>('data_users').doc(ID_USER).set({ ... USER }).then(() => {
            this.showMessage.succes('Bienvenido a Apitecto', '');
        })
        .catch(error => {
            this.showMessage.error('No se pudimos guardar tu registro!', 'Estamos trabajando en ello, error: ' + error.code)
        })
    }

    updateUserDataBase(ID_USER: string, USER: UserModel): Promise<void> {
        return this.dbSave.collection<UserModel>('data_users').doc(ID_USER).update({ ... USER }).then(() => {
            this.showMessage.succes('Cambios guardados', 'Hemos actualizado tus datos correctamente.');
        })
        .catch(error => {
            this.showMessage.error('No se pudimos guardar tu registro!', 'Estamos trabajando en ello, error: ' + error.code)
        })
    }
}
