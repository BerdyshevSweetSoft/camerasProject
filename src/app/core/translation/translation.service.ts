import { Injectable, Inject } from '@angular/core';
declare const require;

@Injectable({
  providedIn: 'root'
})

export class TranslatorService {
  private languagesObject;


  constructor(@Inject('config') private config) {
    let lang = this.config.defaultLang;
    this.setLanguage(lang);
  }

  setLanguage(value) {
    this.languagesObject = require(`src/assets/locale/${value}.json`);
  }

  get(key) {
    try { return this.languagesObject[key]; } catch (error) { }
  }
}