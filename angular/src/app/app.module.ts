//moduli
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from '@angular/router';

import { appRoutes } from "./app.router";

import { AppComponent } from './app.component';
import HomeComponent from "./home/home.component";
import RegisterComponent from "./register/register.component";
import LoginComponent from "./login/login.component";
import SobeComponent from "./sobe/sobe.component";
import DodajComponent from "./dodaj/dodaj.component";
import { CSSCarouselComponent }  from './home/csscarousel/csscarousel.component';

import {RegisterService} from "./services/register.service";
import  {LoginService} from "./services/login.service";
import SobeService from "./services/sobe.service";
import DodajService from "./services/dodaj.service";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CSSCarouselComponent,
    RegisterComponent,
    LoginComponent,
    SobeComponent,
    DodajComponent,
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
  RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RegisterService,
    LoginService,
    SobeService,
    DodajService],
  bootstrap: [AppComponent]
})
export class AppModule { }
