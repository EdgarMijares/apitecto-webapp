import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
@Injectable({
    providedIn: 'root'
})
export class StorageService {
    uploadPercent: Observable<number | undefined>;
    downloadURL: Observable<string | undefined>;
   
    constructor(private storage: AngularFireStorage, private authService: AuthService) { }

    /**
     * Function to upload any type of file
     * @param event capture file event to upload
     * @param path direcion to send file
     */
    uploadFile( event: any ) {
        const file = event;
        const fileRef = this.storage.ref(event.name)
        const task = this.storage.upload(event.name, file);

        this.uploadPercent = task.percentageChanges();

        task.snapshotChanges().pipe(
            finalize(() => this.downloadURL = fileRef.getDownloadURL() )
        ).subscribe();
    }

    uploadImage(event: any, path: string): Observable<string> {
        this.uploadFile(event);
        return this.downloadURL;
    }

    getUrlProfileImage() {
        return this.storage
            .ref(`user/${ this.authService.getUserID() }/profile/${ this.authService.getUserID() }.png`)
            .getDownloadURL();
    }
}
