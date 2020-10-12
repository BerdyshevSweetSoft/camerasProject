import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of, interval } from 'rxjs';
import { CameraData } from '../shared/models/camera-data.model';
import { GetData } from '../mock-data/data';
import 'rxjs/add/operator/mergeMap';
import { mergeMap } from 'rxjs-compat/operator/mergeMap';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  constructor(private http: GetData ) { }

  public getCameras(): Observable<CameraData[]> {
      return of(this.http.getCameras());
  }

  public getCamerasInterval(): Observable<CameraData[]> {
    return interval(5000).mergeMap(() => {
      return of(this.http.getCameras());
    });
  }

}
