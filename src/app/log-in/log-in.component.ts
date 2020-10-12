import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalEventsManager } from '../core/global-events-manager';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {

   constructor(private _router: Router,
      private _globalEventsManager: GlobalEventsManager) {
  }

  ngOnInit(){
  }

  onLogin() {

    this._globalEventsManager.changeData(true);
    this._router.navigate(['dashboard']);

  }
}
