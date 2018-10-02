import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdherentComponent } from './adherent/adherent.component';
import { AgePipe } from '../shared/pipe/age.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PageNotFoundComponent,
    HomeComponent,
    LoginComponent,
    AdherentComponent,
    AgePipe
  ]
})
export class MainFrameModule { }
