import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { UserModel } from '../../models/models';
import { AuthErrorService } from './auth-error.service';
import { DataSaveService } from '../data-save.service';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    /** @var string return UID to user login */
    public userUID = '';
    
    /**
     * @param errorMessage Shows message to user
     * @param dataSave Send data to service then save.
     */
    constructor( private authUser: AngularFireAuth, 
            private errorMessage: AuthErrorService,
            private dataSave: DataSaveService, 
            private localSave: LocalStorageService,
            private route: Router ) {
        this.authUser.authState.subscribe( user => {
            try {
                this.userUID = user.uid;
            } catch (error) {
                this.userUID = '';
            }
        })
    }

    /**
     * @param user Model to build user on database
     * 
     * This function create user and redirect to user profile config
     * @param userStatus Is the result of the query contain
     * @var user Have the user's details after authentication
     */
    createUser( user: UserModel ): void {
        this.authUser.auth.createUserWithEmailAndPassword(user.email, user.password)
        .then( userStatus => {
            this.dataSave.saveUserDataBase(userStatus.user.uid, user);
            userStatus.user.getIdToken().then( data => {
                this.localSave.saveLocalStorage('token', data)
            })
            this.route.navigate(['/dashboard']);
        })
        .catch( err => {            
            this.errorMessage.showUserErrorMessageAuthService(err.code)
        });
    }

    /**
     * @var getIdToken Get token to save session
     */
    loginUser( user: UserModel ) {
        this.authUser.auth.signInWithEmailAndPassword(user.email, user.password)
        .then( userStatus => {
            userStatus.user.getIdToken().then( data => {
                this.localSave.saveLocalStorage('token', data)
            })
            this.route.navigate(['/dashboard']);
        })
        .catch( err => {
            this.errorMessage.showUserErrorMessageAuthService(err.code)
        });
    }

    logOutUser() {
        this.authUser.auth.signOut()
        .then(() => {
            this.localSave.removeLocalStorage('token');
            this.userUID = '';
            this.route.navigate(['/login', 'ingresar']);
        })
        .catch( err => {
            this.errorMessage.showUserErrorMessageAuthService(err.code)
        });
    }

    getUserID() {
        return this.userUID;
    }

}
