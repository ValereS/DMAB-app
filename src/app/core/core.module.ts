import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TownService } from './townService/town.service';
import { FormService } from './formService/form.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [TownService, FormService]
})
export class CoreModule { }
