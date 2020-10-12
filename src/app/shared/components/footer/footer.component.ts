import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../../../core/translation/translation.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(public translator: TranslatorService) { }

  ngOnInit() {
  }

}
