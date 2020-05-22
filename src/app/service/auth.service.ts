import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserModel } from '../models/models';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataSaveService } from './data-save.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor( private authUser: AngularFireAuth, private dataSave: DataSaveService ) { }

    createUser( user: UserModel ) {
        this.authUser.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then( userStatus => {
            console.log('Se creo usuario ', userStatus.user.uid);

            this.dataSave.saveUserDataBase( userStatus.user.uid, user);
        })
        .catch( err => {
            console.error(err);
        })
        .finally(() => {
            // If user create successful, set router login.
        })
    }

    loginUser( user: UserModel ) {
        this.authUser.auth.signInWithEmailAndPassword( user.email, user.password )
        .then( userSatus => {
            // console.log( userSatus.user.refreshToken );
        })
        .catch( err => {
            console.error(err);
        })
        .finally(() => {
            // If user create successful, set router login.
        })
    }

}
