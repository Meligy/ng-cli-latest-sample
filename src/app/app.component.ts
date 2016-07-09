import { Component } from '@angular/core';
import { Observable } from "rxjs/Rx";

import "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = Observable.of('app works!');
  
  constructor() {
    const x = Object.assign({ original: 0 }, {newVer: 1});
  }
}
