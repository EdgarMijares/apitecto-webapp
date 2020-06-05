import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { UserModel } from '../models/models';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataQueryService {

    private ID_USER = this.auth.getUserID();

    constructor(private dbQuery: AngularFirestore, private auth: AuthService) { }

    userProfileData(): Observable<DocumentChangeAction<UserModel>[]>{
        return this.dbQuery.collection<any>('data_users').snapshotChanges()
        .pipe( map( action => action.map( _ => {
            const object = _.payload.doc.data();
            return {... object};
        }) ))
    }

    userData() {
        return this.dbQuery.collection<UserModel>('data_users').doc(this.ID_USER)
        .snapshotChanges().pipe(
            map( this.documentToDomainObject ));
    }

    documentToDomainObject = _ => {
        const object = _.payload.data();
        // object.id = _.payload.id;
        return object;
    }

}
