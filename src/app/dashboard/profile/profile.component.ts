import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserModel, SocialModel } from '../../models/user-model';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AuthService, StorageService, DataSaveService } from '../../service/service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { DataQueryService } from 'src/app/service/data-query.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: []
})

export class ProfileComponent implements OnInit {

    /**
    * 	@var declaration
    */
    file;
    imageChangedEvent: any = '';
    croppedImage: any = '';
    afterCroppedImage: any = '';
    flagChangeImage: boolean = false;

    userModel: UserModel;

    closeResult: string;

    personalFlagProfile:boolean = true;
    personalFlagContact:boolean = true;

    constructor(private authService: AuthService, private modalService: NgbModal,
            private storage: StorageService, private dataSave: DataSaveService,
            private dbQuery: DataQueryService) {
                this.getImageProfile();
            }
  
    ngOnInit() {
        this.userModel = new UserModel();

        this.dbQuery.userData().subscribe( (user: UserModel) => {
            this.userModel = user;
        });
    }

    getImageProfile() {
        this.storage.getUrlProfileImage().subscribe(data => {
            this.croppedImage = data;
        },
        () => {
            this.croppedImage = './assets/img/default-avatar.png';
        });
    }

    changeFlagProfile() {
        this.personalFlagProfile = !this.personalFlagProfile;
        // let temp = {};
        if(this.personalFlagProfile === true) {
            this.dataSave.setUserDataBase(this.userModel, 'update');
        }
        
    }
    
    changeFlagContact() {
        this.personalFlagContact = !this.personalFlagContact;
        if (this.personalFlagContact === true) {
            this.dataSave.setUserDataBase(this.userModel, 'update');
        }
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

    saveProfileImage() {
        // Aqui tienes que enviar el fichero ya a la API
        this.storage.uploadFile(this.file)
        this.storage.uploadPercent.subscribe( percent => {
            if (percent === 100) {
                // this.changeFlagProfile();
                this.modalService.dismissAll('End work')
            }
        })
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
        var file = this.dataURLtoFile(this.croppedImage, `user/${ this.authService.getUserID() }/profile/${ this.authService.getUserID() }.png`);
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
    }

    cropperReady() {
        // cropper ready
    }

    loadImageFailed() {
        // show message
        // console.log('fffff')
    }

    /**
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
