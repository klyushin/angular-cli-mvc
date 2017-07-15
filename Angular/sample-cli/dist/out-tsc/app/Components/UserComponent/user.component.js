var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { UserService } from "../../Service/user.service";
import { FormBuilder, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { DBOperations } from "../../Shared/enum";
import { Global } from '../../Shared/global';
var UserComponent = (function () {
    function UserComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.indLoading = false;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: [''],
            Gender: ['']
        });
        this.LoadUsers();
    };
    UserComponent.prototype.LoadUsers = function () {
        var _this = this;
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT).subscribe(function (users) {
            _this.users = users;
            _this.indLoading = false;
        }
        //, error => this.msg = <any>error
        );
    };
    UserComponent.prototype.addUser = function () {
        this.dbops = DBOperations.create;
        this.SetControlsState(true);
        this.modalTitle = "Add new user";
        this.modalBtnTitle = "Add";
        this.userFrm.reset();
        this.modal.open();
    };
    UserComponent.prototype.editUser = function (id) {
        this.dbops = DBOperations.update;
        this.SetControlsState(true);
        this.modalTitle = "Edit User";
        this.modalBtnTitle = "Update";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.deleteUser = function (id) {
        this.dbops = DBOperations.delete;
        this.SetControlsState(false);
        this.modalTitle = "Confirm to Delete?";
        this.modalBtnTitle = "Delete";
        this.user = this.users.filter(function (x) { return x.Id == id; })[0];
        this.userFrm.setValue(this.user);
        this.modal.open();
    };
    UserComponent.prototype.SetControlsState = function (isEnable) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    };
    UserComponent.prototype.criteriaChange = function (value) {
        if (value != '[object Event]')
            this.listFilter = value;
    };
    UserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.msg = "";
        switch (this.dbops) {
            case DBOperations.create:
                this._userService.post(Global.BASE_USER_ENDPOINT, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully added!";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) { _this.msg = error; });
                break;
            case DBOperations.update:
                this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(function (data) {
                    if (data == 1) {
                        _this.msg = "Data successfully updated.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) { _this.msg = error; });
                break;
            case DBOperations.delete:
                this._userService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(function (data) {
                    if (data = 1) {
                        _this.msg = "Data successfully deleted.";
                        _this.LoadUsers();
                    }
                    else {
                        _this.msg = "There is some issue in saving records, please contact to system administrator!";
                    }
                    _this.modal.dismiss();
                }, function (error) { _this.msg = error; });
                break;
        }
    };
    return UserComponent;
}());
__decorate([
    ViewChild('modal'),
    __metadata("design:type", ModalComponent)
], UserComponent.prototype, "modal", void 0);
UserComponent = __decorate([
    Component({
        templateUrl: 'user.component.html'
    }),
    __metadata("design:paramtypes", [FormBuilder, UserService])
], UserComponent);
export { UserComponent };
//# sourceMappingURL=C:/Projects/angular-cli-mvc/angular-cli-mvc/Angular/sample-cli/src/app/Components/UserComponent/user.component.js.map