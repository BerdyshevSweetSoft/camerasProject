import { IndicatorStatus } from '../enums/indicator-status.enum';

 export class CameraData {
    id: number;
    imageUrl: string;
    indicator: IndicatorStatus;

    constructor(id: number,imageUrl: string,indicator: IndicatorStatus) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.indicator= indicator;
    }
}