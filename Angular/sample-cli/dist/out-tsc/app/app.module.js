var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { UserService } from './Service/user.service';
import { UserFilterPipe } from './Filters/user.pipe';
import { AppErrorHandler } from './Shared/errorhandler';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            { provide: APP_BASE_HREF, useValue: '/' }, { provide: ErrorHandler, useClass: AppErrorHandler }, UserService
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=C:/Projects/angular-cli-mvc/angular-cli-mvc/Angular/sample-cli/src/app/app.module.js.map