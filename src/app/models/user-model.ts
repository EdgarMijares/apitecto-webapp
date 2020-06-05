export class UserTestModel {
    email: string;
}

// https://regex101.com/r/DTKZyD/1
let regexFacebook = '(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*(\s\S)*)(?:\/*)?';

export class UserModel {
    id?: string;
    rfc?: string;
    name?: string;
    lastname_p?: string;
    lastname_m?: string;
    address?: string;
    password?: string;
    
    // SOCIAL: 
    email?: string;
    phone?: string;
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    
    // PORTFOLIO
    id_portfolio?: string;
}

class Phone {
    id_phone: string;
    primary: string;
    secondary: string;
}

export class SocialModel {
    id_social: string;
    facebook_user: string;
    twitter_user: string;
    instagram_user: string;
}