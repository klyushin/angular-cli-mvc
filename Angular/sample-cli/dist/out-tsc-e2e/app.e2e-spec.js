"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_po_1 = require("./app.po");
describe('sample-cli App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.SampleCliPage();
    });
    it('should display message saying app works', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});
//# sourceMappingURL=app.e2e-spec.js.map