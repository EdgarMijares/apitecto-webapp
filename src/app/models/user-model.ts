export class UserTestModel {
    email: string;
}

// https://regex101.com/r/DTKZyD/1
let regexFacebook = '(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*(\s\S)*)(?:\/*)?';

export class UserModel {
    id_user?: string;
    rfc?: string;
    name?: string;
    lastname_p?: string;
    lastname_m?: string;
    address?: string;
    email?: string;
    phone?: string;
    website?: string;
    social?: Social;
    id_portfolio?: string;
    password?: string;

    // social_model: 

    constructor() {
        // this.phone = new Phone();
        this.social = new Social();
    }
}

class Phone {
    id_phone: string;
    primary: string;
    secondary: string;
}

class Social {
    id_social: string;
    facebook_user: string;
    twitter_user: string;
    instagram_user: string;
}