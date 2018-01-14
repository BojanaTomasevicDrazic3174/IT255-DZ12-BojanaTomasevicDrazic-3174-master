"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/Rx");
var kategorije_service_1 = require("../../services/kategorije.service");
var CategoriesComponent = (function () {
    function CategoriesComponent(kaegorijeService) {
        var _this = this;
        this.kaegorijeService = kaegorijeService;
        var $;
        this.kaegorijeService.getKategorije().subscribe(function (data) {
            _this.categories = data;
            setInterval(function () {
                $ = window['jQuery'];
                $('table').DataTable();
            }.bind(_this), 400);
        });
    }
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    core_1.Component({
        selector: 'categories',
        templateUrl: "./categories.html",
    }),
    __metadata("design:paramtypes", [kategorije_service_1.default])
], CategoriesComponent);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map