import { Component, OnInit, OnDestroy, SimpleChanges, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CamerasService } from '../services/cameras.service';
import { CameraData } from '../shared/models/camera-data.model';
import { Subscription, forkJoin,  } from 'rxjs';
import paginate = require('jw-paginate');
import { GlobalEventsManager } from '../core/global-events-manager';
import { Router } from '@angular/router';
import {from as fromPromise} from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, OnDestroy {
  @Input() size=8;
  cameras: CameraData[];
  subscription: Subscription[]=[]
  pageOfItems: Array<any>;
  

  constructor(private _camerasService:CamerasService,
    private _globalEventsManager: GlobalEventsManager,
    private _router: Router) { }

  ngOnInit() {
    this.subscription.push(this._globalEventsManager.onChangeData().subscribe(data=>{
      if(!data){
        this._router.navigate(['log-in']);
      }

      new Promise((resolve, reject) => {
        this.subscription.push(this._camerasService.getCameras().subscribe(data=>{
          this.cameras = data;
        }));
            resolve();
          }).then(()=>{
            this.subscription.push(this._camerasService.getCamerasInterval().subscribe(data=>{
              this.cameras = data;
            }));
          });

      
    }));
  }

  

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}




  ngOnDestroy(){
    if(this.subscription)
    this.subscription.forEach(x=>x.unsubscribe());
  }

}
