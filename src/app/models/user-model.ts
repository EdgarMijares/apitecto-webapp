export class UserTestModel {
    email: string;

}

export class UserModel {
    id_user: string;
    rfc: string;
    name: string;
    lastname_p: string;
    lastname_m: string;
    direccion: string;
    email: string;
    phone: Phone[];
    website: string;
    social: Social;
    id_portfolio: string;
    password: string;
}

class Phone {
    id_phone: string;
    code: string;
    number: string;
}

class Social {
    id_social: string;
    facebook_user: string;
    twitter_user: string;
    instagram_user: string;
}