import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainFrameModule } from './main-frame/main-frame.module';
import { MainFrameComponent } from './main-frame/main-frame.component';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '../../node_modules/@angular/common';
registerLocaleData(localeFr);

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MainFrameComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MainFrameModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      NgbModule.forRoot(
      )
      ],
    providers: [
      { provide: LOCALE_ID, useValue: 'fr' }
    ],
   bootstrap: [AppComponent]
})
export class AppModule { }
