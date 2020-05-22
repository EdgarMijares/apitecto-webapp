import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserModel } from '../../models/user-model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: []
})
export class ProfileComponent implements OnInit {

    file;
    imageChangedEvent: any = '';
    croppedImage: any = '';

    userModel: UserModel;

    constructor() { }
  
    ngOnInit() {
        this.userModel = new UserModel();

        this.userModel.name = 'Edgar Mijares';
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.file = file;
        }
    }

    save() {
        console.log(this.file);
        // Aqui tienes que enviar el fichero ya a la API
    }

    fileChangeEvent(event: any): void {
        console.log(event);
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;

        //Usage example:
        var file = this.dataURLtoFile(this.croppedImage,'image.png');
        console.log(file);
        this.file = file;
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    imageLoaded() {
        // show cropper
    }

    cropperReady() {
        // cropper ready
    }

    loadImageFailed() {
        // show message
        console.log('fffff')
    }
}
