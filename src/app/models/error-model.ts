/**
 * CODE ERROR MANAGEMENT
 * Class build for model error control
 * 
 * @author Edgar Mijares
 * @version 0.0.1
 * 
 * 
*/

export class ErrorModel{
    private code_error: string;
    private description: string;
    private date_error: Date;
    private status: boolean;

    constructor(code_error: string, descrption: string, status?: boolean) {
        this.code_error = code_error;
        this.description = descrption;
        this.date_error = new Date();
        this.status = false;
    }
}