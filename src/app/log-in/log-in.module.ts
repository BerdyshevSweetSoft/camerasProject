import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { LogInComponent } from './log-in.component';
import { LogInRoutingModule } from './log-in-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LogInComponent,
  ],
  imports: [
    LogInRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
  ]
})
export class LogInModule {}
