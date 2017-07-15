import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/HomeComponent/home.component';
import { Page1Component } from './Components/Page1/page1.component';
import { UserComponent } from "./Components/UserComponent/user.component";
import { SearchComponent } from './Shared/search.component';

import { UserService } from './Service/user.service'
import { UserFilterPipe } from './Filters/user.pipe';

import { AppErrorHandler } from './Shared/errorhandler';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, Page1Component, UserComponent, UserFilterPipe, SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2Bs3ModalModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }, { provide: ErrorHandler, useClass: AppErrorHandler }, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
