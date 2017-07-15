var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ErrorHandler } from '@angular/core';
var AppErrorHandler = (function (_super) {
    __extends(AppErrorHandler, _super);
    function AppErrorHandler() {
        return _super.call(this, true) || this;
    }
    AppErrorHandler.prototype.handleError = function (error) {
        debugger;
        alert(error);
        _super.prototype.handleError.call(this, error);
    };
    return AppErrorHandler;
}(ErrorHandler));
export { AppErrorHandler };
//# sourceMappingURL=C:/Projects/angular-cli-mvc/angular-cli-mvc/Angular/sample-cli/src/app/Shared/errorhandler.js.map