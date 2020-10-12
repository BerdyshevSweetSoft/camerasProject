import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from './translation.service';

@Pipe({ name: 'tr', pure: false })

export class TranslatorPipe implements PipeTransform {
  constructor(private translator: TranslatorService) { }
  transform(value: any) {
    if (!value) return;
    return this.translator.get(value);
  }

}