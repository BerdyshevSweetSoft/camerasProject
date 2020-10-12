import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { GlobalEventsManager } from 'src/app/core/global-events-manager';
import { of, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.sass']
})
export class NavigationBarComponent implements OnInit,OnDestroy {
  
  subscription: Subscription;
  showNavBar: boolean = false;

    constructor(private _globalEventsManager: GlobalEventsManager,private _router: Router) { 
       
    }
    
  ngOnInit() {
    this.subscription=this._globalEventsManager.onChangeData().subscribe((data)=>{
    this.showNavBar=data;
  });
  }

    onLogOut(){
      this._globalEventsManager.changeData(false);
      this._router.navigate(['log-in']);
    }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
