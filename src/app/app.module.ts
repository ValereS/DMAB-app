import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main-frame/home/home.component';
import { LoginComponent } from './main-frame/login/login.component';
import { MainFrameModule } from './main-frame/main-frame.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      MainFrameModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule.forRoot(
      )
      ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
