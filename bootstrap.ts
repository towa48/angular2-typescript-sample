/// <reference path="./node_modules/angular2/angular2.d.ts" />

import { bootstrap, FORM_PROVIDERS } from 'angular2/angular2';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { App } from './app';

bootstrap(App, [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
