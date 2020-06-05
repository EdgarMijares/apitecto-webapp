/**
 * AUTH SERVICE MANAGEMENT
 * 
 * @author Edgar Mijares
 * @version 0.0.2
 * 
*/
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

import { UserModel } from '../../models/models';
import { AuthErrorService } from './auth-error.service';
import { DataSaveService } from '../data-save.service';
import { LocalStorageService } from '../local-storage.service';
import { AuthSaveService } from './auth-save.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    /**
     * @param errorMessage Shows message to user
     * @param dataSave Send data to service then save.
     */
    constructor( private authUser: AngularFireAuth, 
            private errorMessage: AuthErrorService,
            private dataSave: AuthSaveService, 
            private localSave: LocalStorageService,
            private route: Router ) {
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
            userStatus.user.getIdTokenResult().then( data => {
                this.localSave.saveLocalStorageObject('token', data)
                this.route.navigate(['/dashboard']);
            })
        })
        .catch( err => {            
            this.errorMessage.showUserErrorMessageAuthService(err.code)
        });
    }

    /**
     * @var getIdTokenResult Get token to save session
     */
    loginUser( user: UserModel ) {
        this.authUser.auth.signInWithEmailAndPassword(user.email, user.password)
        .then( userStatus => {
            userStatus.user.getIdTokenResult().then( data => {
                this.localSave.saveLocalStorageObject('token', data)
            })
            this.route.navigate(['/dashboard']);
        })
        .catch( err => {
            this.errorMessage.showUserErrorMessageAuthService(err.code)
        });
    }

    /**
     * @function signOut() for firebase, end session and delete user data.
     */
    logOutUser() {
        this.authUser.auth.signOut()
        .then(() => {
            this.localSave.removeLocalStorage('token');
        })
        .catch( err => {
            this.errorMessage.showUserErrorMessageAuthService(err.code)
        })
        .finally(() => {
            this.route.navigate(['/login']);
        })
    }

    /**
     * @returns user_id
     */
    getUserID() {
        const token = this.localSave.getLocalStorageObject('token');

        return token.claims.user_id;
    }

    /**
     * @returns boolean
     * Get token in localstorage, then check if session doesn't expire.
     */
    userStatus() {
        const token = this.localSave.getLocalStorageObject('token');

        if ( token ) {
            if ( token.token.lenght < 10 ) {
                 return false
            }
    
            if(new Date(token.expirationTime) > new Date()) {
                return true;
            } else {
                this.logOutUser();
                return false;
            }
        } else {
            return false
        }
    }
}
