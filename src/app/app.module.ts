import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { GlobalEventsManager } from './core/global-events-manager';
import { TranslatorModule } from './core/translation/translation.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [GlobalEventsManager],
  bootstrap: [AppComponent]
})
export class AppModule { }