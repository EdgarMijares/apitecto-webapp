import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RfcValidateService {

    constructor( private http: HttpClient ) { }

    consultarRFC( rfc: string) {
        // const params = new HttpParams().append('rfc', )
        const header = new HttpHeaders({
            'x-api-key': 'IJF7GoZuEV4r654654gfdt4564f465ghK5Qw8jiRi9h25',
        })
        return this.http.get(`https://api.cfdi.ninja/validar/${ rfc }`, { headers: header });
    }

}
