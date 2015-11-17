/// <reference path="./node_modules/angular2/angular2.d.ts" />

import { Component, View, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'welcome.html',
    directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ]
})
export class App {
    state: any;
    constructor() {
      this.state = 1;
    }
    toggle(e) {
      e.preventDefault();
      console.log('old state: ' + this.state);
      this.state = 2;
    }
}
