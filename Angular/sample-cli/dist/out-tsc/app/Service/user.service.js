var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.get = function (url) {
        return this._http.get(url).map(function (response) { return response.json(); });
        //.catch(this.handleError);
    };
    UserService.prototype.post = function (url, model) {
        var body = JSON.stringify(model);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this._http.post(url, body, options).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    UserService.prototype.put = function (url, id, model) {
        var body = JSON.stringify(model);
        var headers = new Headers({ "Content-Type": "application/json" });
        var options = new RequestOptions({ headers: headers });
        return this._http.put(url + id, body, options).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    UserService.prototype.delete = function (url, id) {
        var headers = new Headers({ "Content-Type": "application/json" });
        var options = new RequestOptions({ headers: headers });
        return this._http.delete(url + id, options).map(function (response) { return response.json(); }).catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Observable.throw(error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
export { UserService };
//# sourceMappingURL=C:/Projects/angular-cli-mvc/angular-cli-mvc/Angular/sample-cli/src/app/Service/user.service.js.map