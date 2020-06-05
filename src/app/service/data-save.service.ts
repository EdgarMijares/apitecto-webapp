import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserModel } from '../models/models';
import { ShowUserMessageService } from './show-user-message.service';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataSaveService {

    private ID_USER = this.auth.getUserID();

    constructor( private dbSave: AngularFirestore, 
        private showMessage: ShowUserMessageService,
        private auth: AuthService) { }

    setUserDataBase(USER: UserModel, action: string) {
        const tempUser: UserModel = {
            ... USER
        }

        delete tempUser.password;

        switch(action) {
            case 'update': {
                this.updateUserDataBase(tempUser);
                break;
            }
            case 'save': {
                this.updateUserDataBase(tempUser);
                break;
            }
            default: {
                console.error('No sabemos que hacer con esta peticion.');
                break;
            }
        }
    }

    saveUserDataBase(USER: UserModel): Promise<void> {
        return this.dbSave.collection<UserModel>('data_users').doc(this.ID_USER).set({ ... USER }).then(() => {
            this.showMessage.succes('Bienvenido a Apitecto', '');
        })
        .catch(error => {
            this.showMessage.error('No se pudimos guardar tu registro!', 'Estamos trabajando en ello, error: ' + error.code)
        })
    }

    updateUserDataBase(USER: UserModel): Promise<void> {
        return this.dbSave.collection<UserModel>('data_users').doc(this.ID_USER).update({ ... USER }).then(() => {
            this.showMessage.succes('Cambios guardados', 'Hemos actualizado tus datos correctamente.');
        })
        .catch(error => {
            this.showMessage.error('No se pudimos guardar tu registro!', 'Estamos trabajando en ello, error: ' + error.code)
        })
    }
}
