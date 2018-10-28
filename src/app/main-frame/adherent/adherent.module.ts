import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdherentDetailsComponent } from './adherent-details/adherent-details.component';
import { AdherentComponent } from './adherent.component';
import { PipeModule } from '../../shared/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [
    AdherentComponent,
    AdherentDetailsComponent
  ]
})
export class AdherentModule { }
