import { Pipe, PipeTransform } from '@angular/core';
import { IndicatorStatus } from '../enums/indicator-status.enum';
  
@Pipe({
    name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: number) {
    return IndicatorStatus[value];
  }
}