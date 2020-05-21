// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    baseURL: 'http://localhost:4200',
    apiMapsKey: 'AIzaSyA5w7bYuyN26jUPfvZpCG3YXwptolauY9M',
    firebaseConfig: {
        apiKey: 'AIzaSyA5w7bYuyN26jUPfvZpCG3YXwptolauY9M',
        authDomain: 'apitecto-d77cd.firebaseapp.com',
        databaseURL: 'https://apitecto-d77cd.firebaseio.com',
        projectId: 'apitecto-d77cd',
        storageBucket: 'apitecto-d77cd.appspot.com',
        messagingSenderId: '179398224856',
        appId: '1:179398224856:web:4d9c87a5a8035488'
    }
};
