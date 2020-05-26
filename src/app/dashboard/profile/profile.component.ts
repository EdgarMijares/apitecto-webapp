import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserModel } from '../../models/user-model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/service/service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: []
})
export class ProfileComponent implements OnInit {

    file;
    imageChangedEvent: any = '';
    croppedImage: any = './assets/img/ryan.jpg';
    flagChangeImage: boolean = false;

    userModel: UserModel;

    closeResult: string;

    personalFlagProfile:boolean = true;
    personalFlagContact:boolean = true;


    constructor(private authService: AuthService, private modalService: NgbModal) { }
  
    ngOnInit() {
        this.userModel = new UserModel();

        this.userModel.name = 'Edgar Mijares';
    }

    changeFlagProfile() {
        this.personalFlagProfile = !this.personalFlagProfile;
    }
    
    changeFlagContact() {
        this.personalFlagContact = !this.personalFlagContact;
    }
    
    /**
     * CROPPER IMAGE
     */
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
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;

        //Usage example:
        var file = this.dataURLtoFile(this.croppedImage, `${ this.authService.getUserID() }.png`);
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
        this.flagChangeImage = true;
        // let baseImage = new Image();
        // baseImage.setAttribute('crossOrigin', 'anonymous');
        // baseImage.src = './assets/img/ryan.jpg';

        // return this.dataURLtoFile(baseImage, 'temp.png');

        // return new Promise<string>(resolve => {
        //     var img = new Image();
        //     img.src = './assets/img/ryan.jpg';
        //     img.setAttribute('crossOrigin', 'anonymous');
        //     img.onload = (() => {
        //         var canvas = document.createElement("canvas");
        //         canvas.width = img.width;
        //         canvas.height = img.height;
        //         var ctx = canvas.getContext("2d");
        //         ctx.drawImage(img, 0, 0);
        //         var dataURL = canvas.toDataURL("image/png");
        //         console.log('UgetBase64Image.dataURL ', dataURL);
        //         resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
        //     });
        // });
    }

    cropperReady() {
        // cropper ready
    }

    loadImageFailed() {
        // show message
        // console.log('fffff')
    }

    /**
     * 
     * @param content 
     * @param type 
     */
    open(content, type) {
        if (type === 'sm') {
            this.modalService.open(content, { size: 'sm' }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
}
