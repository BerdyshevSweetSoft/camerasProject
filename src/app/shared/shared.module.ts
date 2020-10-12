import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { TranslatorModule } from '../core/translation/translation.module';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { FooterComponent } from './components/footer/footer.component';

export const sharedComponents = [
    NavigationBarComponent,
    FooterComponent,
    JwPaginationComponent
];

@NgModule({
  imports: [
    CommonModule,
    TranslatorModule.forRoot({
      defaultLang: 'en'
    })
  ],
  exports: [
    CommonModule,
    TranslatorModule,
    ...sharedComponents
  ],
  declarations: [
    ...sharedComponents,
  ],
  providers: [
    
  ],
})
export class SharedModule {}


