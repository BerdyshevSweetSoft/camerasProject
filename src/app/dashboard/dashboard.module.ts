import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { CamerasService } from '../services/cameras.service';
import { GetData } from '../mock-data/data';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormatPipe } from '../shared/pipes/format.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    FormatPipe
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  providers: [
    CamerasService,
    GetData
  ]
})
export class DashboardModule {}
