import { Injectable } from '@angular/core';
import { ErrorModel, UserModel } from 'src/app/models/models';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShowUserMessageService } from '../show-user-message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthSaveService {

    constructor(private dbSave: AngularFirestore,
        private showMessage: ShowUserMessageService,
        ) { }  

    saveUserDataBase(ID_USER:string, USER: UserModel): Promise<void> {
        return this.dbSave.collection<UserModel>('data_users').doc(ID_USER).set({ ... USER }).then(() => {
            this.showMessage.succes('Bienvenido a Apitecto', '');
        })
        .catch(error => {
            this.showMessage.error('No se pudimos guardar tu registro!', 'Estamos trabajando en ello, error: ' + error.code)
        })
    }

}
