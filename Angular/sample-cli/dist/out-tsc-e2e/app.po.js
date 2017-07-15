"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var SampleCliPage = (function () {
    function SampleCliPage() {
    }
    SampleCliPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    SampleCliPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return SampleCliPage;
}());
exports.SampleCliPage = SampleCliPage;
//# sourceMappingURL=app.po.js.map