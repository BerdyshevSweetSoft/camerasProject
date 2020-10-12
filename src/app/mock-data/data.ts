import { CameraData } from '../shared/models/camera-data.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class GetData{
    images:string[]=[
"https://s3.amazonaws.com/pbblogassets/uploads/2019/12/22140346/shutterstock_287714480-1.jpg",
"https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126__340.jpg",
"https://4.img-dpreview.com/files/p/E~TS590x0~articles/2030110990/Fuji-lenses.jpeg",
"https://lorextechnology.com/images/products/LX1080-88W/V2/LX1080-88W-L1.png",
"https://4.img-dpreview.com/files/p/TC2500x1667S2500x1667~sample_galleries/7608032512/0397934453.jpg",
"https://www.lorextechnology.com/images/products/_2016/LBV/LBV2711B/1200x800/cvi-security-camera-LBV2711B-L4.png",
"https://3.img-dpreview.com/files/p/TC2500x1667S2500x1667~sample_galleries/7608032512/4418220960.jpg"];

        getCameras(): CameraData[]{
            let arrayLength = this.generateRandomNumber(1,100);
            let cameras: CameraData[] = [];

            for(let i=1; i<arrayLength;i++){
                cameras.push(new CameraData(i,this.images[this.generateRandomNumber(0,this.images.length-1)],this.generateRandomNumber(0,1)))
            }

            return cameras;
        }

        generateRandomNumber(min:number, max:number): number{
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
}