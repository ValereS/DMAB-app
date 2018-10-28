import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdherentDetailsComponent } from './adherent-details/adherent-details.component';
import { AdherentComponent } from './adherent.component';
import { PipeModule } from '../../shared/pipe/pipe.module';
import { AdherentChartsComponent } from './adherent-charts/adherent-charts.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    ChartModule
  ],
  declarations: [
    AdherentComponent,
    AdherentDetailsComponent,
    AdherentChartsComponent
  ]
})
export class AdherentModule { }
