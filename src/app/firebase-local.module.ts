import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

// ANGUALR FIRE IMPORTS
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

@NgModule({
    declarations: [],
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule
    ],
    providers: [
        { provide: BUCKET, useValue: environment.firebaseConfig.storageBucket }
    ]
})
export class FirebaseLocalModule { }
