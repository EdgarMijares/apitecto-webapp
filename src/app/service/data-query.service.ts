import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { UserModel } from '../models/models';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataQueryService {

    constructor(private dbQuery: AngularFirestore) { }

    userProfileData(ID_USER: string): Observable<DocumentChangeAction<UserModel>[]>{
        return this.dbQuery.collection<any>('data_users').snapshotChanges()
        .pipe( map( action => action.map( _ => {
            const object = _.payload.doc.data();
            return {... object};
        }) ))
    }

    userData(ID_USER: string) {
        return this.dbQuery.collection('data_users').doc(ID_USER)
        .snapshotChanges().pipe(
            map( this.documentToDomainObject ));
    }

    // collectionToDomainObject = _ => {
    //     const object = _.payload.doc.data();
    //     object.id = _.payload.doc.id;
    //     return object;
    // }

    documentToDomainObject = _ => {
        const object = _.payload.data();
        // object.id = _.payload.id;
        return object;
    }
}
