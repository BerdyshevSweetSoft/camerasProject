import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class GlobalEventsManager {

    subject = new BehaviorSubject(false);

    changeData(param) {
      this.subject.next(param);
    }

    onChangeData(){
      return this.subject.asObservable();
    }


}