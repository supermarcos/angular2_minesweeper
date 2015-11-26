// Import Angular dependencies
import {bootstrap, provide} from 'angular2/angular2';

// Import application component
import {App} from './app/app.component';

// Bootstrap the application
bootstrap(App, []).catch(err => console.error(err));