import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdherentModule } from './adherent/adherent.module';
import { PipeModule } from '../shared/pipe/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdherentModule,
    PipeModule
  ],
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class MainFrameModule { }
