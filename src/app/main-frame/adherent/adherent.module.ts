import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdherentGeneralComponent } from './adherent-general/adherent-general.component';
import { AdherentComponent } from './adherent.component';
import { PipeModule } from '../../shared/pipe/pipe.module';
import { AdherentChartsComponent } from './adherent-charts/adherent-charts.component';
import {ChartModule} from 'primeng/chart';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdherentCRUDComponent } from './adherent-crud/adherent-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PipeModule,
    ChartModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdherentComponent,
    AdherentGeneralComponent,
    AdherentChartsComponent,
    AdherentCRUDComponent
  ]
})
export class AdherentModule { }
