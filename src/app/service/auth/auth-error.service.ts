import { Injectable } from '@angular/core';

import { ShowUserMessageService } from '../show-user-message.service';

@Injectable({
    providedIn: 'root'
})

export class AuthErrorService {

    constructor( private showMessage: ShowUserMessageService ) { }

    show( messageError: string ) {
        console.error( messageError );
    }

    showErrorMessage( error: string ) {
        this.showMessage.error('Algo salio mal!', 'Estamos trabajando para solucionarlo.');
    }

    showUserErrorMessageAuthService( error: string ) {        
        switch ( error ) {
            // ERRORS TO USER INPUTS
            case 'auth/invalid-password': {
                this.showMessage.authError('Contraseña incorrecta', 'El valor que se proporcionó dentro de la contraseña, no parece ser el correcto.');
                break;
            }
            case 'auth/invalid-email': {
                this.showMessage.authError('Correo no válido', 'El correo que se proporcionó no es válido. Debe ser una dirección de correo electrónico valida.');
                break;
            }
            case 'auth/invalid-phone-number': {
                this.showMessage.authError('Numero no válido', 'El numero que se proporcionó no es válido. Debe de estar en formato +52 1 ### ### ####.');
                break;
            }
            case 'auth/invalid-user-import': {
                this.showMessage.authError('No se pudieron importar usuarios', 'El registro de usuarios para importar no es válido.');
                break;
            }
            case 'auth/session-cookie-expired': {
                this.showMessage.authError('Sessión expirada', 'La sesión venció.');
                break;
            }
            case 'auth/session-cookie-revoked': {
                this.showMessage.authError('Sessión revocada','Se revoco la sesión');
                break;
            }
            case 'auth/user-not-found': {
                this.showMessage.authError('Tu cuenta no existe', ' No existe ningún registro de usuario que corresponda al identificador proporcionado.');
                break;
            }
            case 'auth/email-already-exists': {
                this.showMessage.authError('El correo ya existe.', 'Otro usuario ya está utilizando el correo electrónico proporcionado.');
                break;
            }
            case 'auth/email-already-in-use': {
                this.showMessage.authError('El correo ya existe', 'Otro usuario ya está utilizando el correo electrónico proporcionado.');
                break;
            }
            case 'auth/phone-number-already-exists': {
                this.showMessage.authError('El numero ya existe', 'Otro usuario ya utiliza el numero proporcionado.');
                break;
            }
            case 'auth/wrong-password': {
                this.showMessage.authError('Contraseña incorrecta.', 'Tu contraseña no era la correcta, revisa que coincidan mayusculas y minisculas.')
            }

            // BACKEND ERRORS LIST -- SAVE TO REVISIONS
            case 'auth/claims-too-large': {
                this.showMessage.authError(error + ' La carga útil del reclamo que se entregó a setCustomUserClaims() supera el tamaño máximo de 1,000 bytes.');
                break;
            }
            case 'auth/id-token-expired': {
                this.showMessage.authError(error + ' El token de ID de Firebase que se proporcionó está vencido.');
                break;
            }
            case 'auth/id-token-revoked': {
                this.showMessage.authError(error + ' Se revocó el token de ID de Firebase.');
                break;
            }
            case 'auth/invalid-argument': {
                this.showMessage.authError(error + ' Se proporcionó un argumento no válido para un método de autenticación. El mensaje de error debe incluir información adicional.');
                break;
            }
            case 'auth/invalid-claims': {
                this.showMessage.authError(error + ' Los atributos personalizados del reclamo que se entregaron a setCustomUserClaims() no son válidos.');
                break;
            }
            case 'auth/invalid-continue-uri': {
                this.showMessage.authError(error + ' La URL de continuación debe ser una string de URL válida.');
                break;
            }
            case 'auth/invalid-creation-time': {
                this.showMessage.authError(error + ' La hora de creación debe ser una string de fecha en formato UTC válida.');
                break;
            }
            case 'auth/invalid-disabled-field': {
                this.showMessage.authError(error + ' El valor que se proporcionó para la propiedad del usuario disabled no es válido. Debe ser un booleano.');
                break;
            }
            case 'auth/invalid-display-name': {
                this.showMessage.authError(error + ' El valor que se proporcionó para la propiedad del usuario displayName no es válido. Debe ser una string que no esté vacía.');
                break;
            }
            case 'auth/invalid-dynamic-link-domain': {
                this.showMessage.authError(error + ' El dominio del vínculo dinámico proporcionado no se configuró o no se autorizó para el proyecto actual.');
                break;
            }
            case 'auth/invalid-email-verified': {
                this.showMessage.authError(error + ' El valor que se proporcionó para la propiedad del usuario emailVerified no es válido. Debe ser un booleano.');
                break;
            }
            case 'auth/invalid-hash-algorithm': {
                this.showMessage.authError(error + ' El algoritmo de hash debe coincidir con las strings de la lista de algoritmos compatibles.');
                break;
            }
            case 'auth/invalid-hash-block-size': {
                this.showMessage.authError(error + ' El tamaño del conjunto de hash debe ser un número válido.');
                break;
            }
            case 'auth/invalid-hash-derived-key-length': {
                this.showMessage.authError(error + ' La longitud de la clave derivada de hash debe ser un número válido.');
                break;
            }
            case 'auth/invalid-hash-key': {
                this.showMessage.authError(error + ' La clave de hash debe ser un búfer de bytes válido.');
                break;
            }
            case 'auth/invalid-hash-memory-cost': {
                this.showMessage.authError(error + ' El costo de la memoria de hash debe ser un número válido.');
                break;
            }
            case 'auth/invalid-hash-parallelization': {
                this.showMessage.authError(error + ' La paralelización de hash debe ser un número válido.');
                break;
            }
            case 'auth/invalid-hash-rounds': {
                this.showMessage.authError(error + ' Las rondas de hash deben ser un número válido.');
                break;
            }
            case 'auth/invalid-hash-salt-separator': {
                this.showMessage.authError(error + ' El campo del separador de sal del algoritmo de hash debe ser un búfer de bytes válido.');
                break;
            }
            case 'auth/invalid-id-token': {
                this.showMessage.authError(error + ' El token de ID que se proporcionó no es un token de ID de Firebase válido.');
                break;
            }
            case 'auth/invalid-last-sign-in-time': {
                this.showMessage.authError(error + ' La hora del último acceso debe ser una string de fecha en formato UTC válida.');
                break;
            }
            case 'auth/invalid-page-token': {
                this.showMessage.authError(error + ' El token de página siguiente que se entregó en listUsers() no es válido. Debe ser una string válida que no esté vacía.');
                break;
            }
            case 'auth/invalid-password-hash': {
                this.showMessage.authError(error + ' El hash de contraseñas debe ser un búfer de bytes válido.');
                break;
            }
            case 'auth/invalid-password-salt': {
                this.showMessage.authError(error + ' La contraseña con sal debe ser un búfer de bytes válido.');
                break;
            }
            case 'auth/invalid-photo-url': {
                this.showMessage.authError(error + ' El valor que se proporcionó para la propiedad del usuario photoURL no es válido. Debe ser una URL de string.');
                break;
            }
            case 'auth/invalid-provider-data': {
                this.showMessage.authError(error + ' providerData debe ser un arreglo de objetos UserInfo.');
                break;
            }
            case 'auth/invalid-provider-id': {
                this.showMessage.authError(error + ' providerId debe ser una string del identificador del proveedor compatible válida.');
                break;
            }
            case 'auth/invalid-session-cookie-duration': {
                this.showMessage.authError(error + ' La duración de las cookies de la sesión debe ser un número válido en milisegundos que vaya entre los 5 minutos y las 2 semanas.');
                break;
            }
            case 'auth/invalid-uid': {
                this.showMessage.authError(error + ' El uid proporcionado debe ser una string no vacía con un máximo de 128 caracteres.');
                break;
            }
            case 'auth/maximum-user-count-exceeded': {
                this.showMessage.authError(error + ' Se excedió el número máximo de usuarios permitidos para importar.');
                break;
            }
            case 'auth/missing-android-pkg-name': {
                this.showMessage.authError(error + ' Si es obligatorio instalar la app para Android, debe proporcionarse un nombre de paquete de Android.');
                break;
            }
            case 'auth/missing-continue-uri': {
                this.showMessage.authError(error + ' Se debe proporcionar una URL de continuación válida en la solicitud.');
                break;
            }
            case 'auth/missing-hash-algorithm': {
                this.showMessage.authError(error + ' Para importar usuarios con hash de contraseñas, es necesario proporcionar el algoritmo de hash y sus parámetros.');
                break;
            }
            case 'auth/missing-ios-bundle-id': {
                this.showMessage.authError(error + ' La solicitud debe contener un ID del paquete de iOS.');
                break;
            }
            case 'auth/missing-uid': {
                this.showMessage.authError(error + ' Se requiere un identificador uid para la operación actual');
                break;
            }
            case 'auth/reserved-claims': {
                this.showMessage.authError(error + ` Uno o más de los reclamos personalizados de usuarios que se entregaron a setCustomUserClaims() están reservados. 
                Por ejemplo, no deben usarse reclamos específicos de OIDC (p. ej., sub, iat, iss, exp, aud o auth_time) como claves para reclamos personalizados.`)
                break;
            }
            case 'auth/uid-already-exists': {
                this.showMessage.authError(error + ' Otro usuario ya utiliza el uid proporcionado. Cada usuario debe tener un uid único.');
                break;
            }
            case 'auth/unauthorized-continue-uri': {
                this.showMessage.authError(error + ' El dominio de la URL de continuación no está en la lista blanca. Inclúyelo a la lista en Firebase console.');
                break;
            }
            case 'auth/operation-not-allowed': {
                this.showMessage.authError(error + ' El proveedor de acceso proporcionado está inhabilitado para tu proyecto de Firebase. Habilítalo en la sección Método de acceso de Firebase console.');
                break;
            }
            case 'auth/invalid-credential': {
                this.showMessage.authError(error + ` La credencial que se usa en la autenticación de los SDK de Admin no se puede emplear para realizar la acción 
                deseada. Algunos métodos de autenticación, como createCustomToken() y verifyIdToken(), requieren que los SDK se inicialicen con una 
                credencial de certificado en lugar de un token de actualización o una credencial predeterminada de la aplicación. Consulta Inicializa 
                el SDK para ver documentación sobre cómo autenticar el SDK de Admin con una credencial de certificado.`);
                break;
            }
            case 'auth/project-not-found': {
                this.showMessage.authError(error + ' No se encontró ningún proyecto de Firebase correspondiente a la credencial que se usó para inicializar los SDK de administrador');
                break;
            }
            case 'auth/insufficient-permission': {
                this.showMessage.authError(error + ' La credencial que se usó para inicializar el SDK de Admin no tiene permisos suficientes para acceder al recurso de autenticación solicitado');
                break;
            }
            default: {
                this.showMessage.authError(error + ' No sabemos que ha pasado', 'Hemos enviado una solicitud a los tecnicos con tu error, esperamos tener una respuesta pronto.');
            }
            
        }
    }
}